# Introduction

![THE DEV ANALYTICAL](https://user-images.githubusercontent.com/67496096/168108711-fce7d34a-a195-4f94-a581-133efb3e32fb.png)


The DEV Analytical application will help you in extending the existing analytical provided by dev.to for your articles. These projects I always wanted to build, and during this hackathon, they came into existence. 

It uses the DEV API key to fetch the required data for analytical purposes. You just need to enter the key, the rest will be available to you on the `dashboard` page. Right now it provides the following data
- Basic
  - Post
  - Follower
  - Reactions
- Advance
  - Views of Last 5 Articles (Line Graph)
  - Top 5 tag(Bar graph based on views)
  - Total Comment
  - Total reading time for all your articles

I would love to add more analytical to the apps such as
- The best time for article posting
- Fun Facts
- Other

# Tech Used

**Appwrite**: For Authentication and Database managment

**Chakra-UI**: For creating User Interface

**ExpressJS**: For backend server to make call to DEV API

# Run on your machine

_Make sure you already have appwrite install in your machine._

### Clone the repo

```bash
git clone https://github.com/surajondev/devto-analytics.git
```
