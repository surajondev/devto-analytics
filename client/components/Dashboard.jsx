import React, {useState, useEffect} from 'react'
import { Heading } from '@chakra-ui/react'
import { DashboardCard } from './Cards/DashboardCard'
import { Line, Bar } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'
import axios from 'axios';

// export async function getStaticProps() {

//   const res = await axios.get('http://localhost:8000/articles')
//   const posts = await res.data

//   return {
//     props: {
//       posts,
//     },
//   }
// }

export const Dashboard = () => {
  const [data, setData] = useState()
  const [views, setViews] = useState(0)
  const [comments, setComments] = useState(0)
  const [reactions, setReactions] = useState(0)
  const [readingTime, setReadingTime] = useState(0)
  const [unqTag, setUnqTag] = useState()
  const [tagObj, setTagObj] = useState()

  useEffect(() =>{
    axios.get("http://localhost:8000/articles")
    .then((response) => {
      let view = 0
      let comment = 0
      let reaction = 0
      let time = 0
      let tag = []
      response.data.map((data) => {
        view = view + data.page_views_count
      })
      response.data.map((data) => {
        reaction = reaction + data.positive_reactions_count
      })
      response.data.map((data) => {
        comment = comment + data.comments_count
      })
      response.data.map((data) => {
        time = time + data.reading_time_minutes
      })
      response.data.map((res) => {
        res.tag_list.map((data) =>{ 
            tag.push(data)
          }
        )
      })
      let uniqueTag = [...new Set(tag)];
      setUnqTag(uniqueTag)
      let tagView = []
      uniqueTag.map((tag) => {
        let view = 0
        response.data.map((res, index) => {
          res.tag_list.map((data) =>{ 
              if(tag == data){
                view = view + res.page_views_count
              }
            }
          )
        })
        tagView.push(view)
      })
      // var tagObject =  Object.assign.apply({}, uniqueTag.map( (v, i) => ( {[v]: tagView[i]} ) ) );
      var tagObject = []
      uniqueTag.map((data, index) => {
        let obj = { name : data, view : tagView[index]}
        tagObject.push(obj)
      })
      tagObject.sort((a, b) => parseFloat(b.view) - parseFloat(a.view));
      setTagObj(tagObject)
      setComments(comment)
      setViews(view)
      setReadingTime(time)
      setReactions(reaction)
      setData(response.data)
    })
  })

  return (
    <div className='homeContainer'>
      <Heading size="lg">Dashboard</Heading>
      {
        data &&
        <div>
          <div className='dashboardContainer'>
              <DashboardCard icon="AiOutlineNumber" title="Posts" value={data.length} />
              <DashboardCard icon="IoIosStats" title="Views" value={views} />
              <DashboardCard icon="BsFillPeopleFill" title="Followers" value='6114' />
              <DashboardCard icon="AiFillHeart" title="Reactions" value={reactions} />
          </div>
          <div className='viewChartContainer'>
              <Heading>Last 5 Articles</Heading>
              <Line
                  data={{
                      labels: [ `${data[4].title.slice(0, 25)}..`, `${data[3].title.slice(0, 25)}..`, `${data[2].title.slice(0, 25)}..`, `${data[1].title.slice(0, 25)}..`, `${data[0].title.slice(0, 25)}..`],
                      datasets: [
                        {
                          label: 'Views',
                          data: [data[4].page_views_count, data[3].page_views_count, data[2].page_views_count, data[1].page_views_count, data[0].page_views_count],
                          borderColor: '#4318FF',
                          backgroundColor: "orange",
                          tension: "0.2"
                        }
                      ],
                    }}
              />
          </div>
          <div className='dashboardContainer'>
              <DashboardCard icon="BiCommentDetail" title="Comments" value={comments} />
              <DashboardCard icon="AiOutlineFieldTime" title="Reading Time" value={readingTime} />
              <DashboardCard icon="AiOutlineTag" title="Tag Used" value={unqTag.length} />
              <DashboardCard icon="AiFillHeart" title="Reactions" value={reactions} />
          </div>
          <div className='viewChartContainer'>
              <Heading>Top 5 Tags</Heading>
              <Bar
                  data={{
                      labels: [tagObj[0].name, tagObj[1].name, tagObj[2].name, tagObj[3].name, tagObj[4].name],
                      datasets: [
                        {
                          label: 'Views',
                          data: [tagObj[0].view, tagObj[1].view, tagObj[2].view, tagObj[3].view, tagObj[4].view],
                          backgroundColor: "#4318FF",
                          tension: "0.2"
                        }
                      ],
                    }}
              />
          </div>
        </div>     
      }
    </div>
  )
}
