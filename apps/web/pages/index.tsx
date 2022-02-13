import xmlParser from 'xml2json';
import { websitePageHOC } from '@src/components/wrappers/websitePageHOC/websitePageHOC';
import { HomeScreen } from '@src/components/screens/HomeScreen/HomeScreen';

// export default HomeScreen;
export default websitePageHOC(HomeScreen);


export async function getStaticProps() {
  const FEED_URL = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCzR2u5RWXWjUh7CwLSvbitA';
  const xmlFeed = await fetch(FEED_URL).then((res) => res.text());
  const jsonFeed = JSON.parse(xmlParser.toJson(xmlFeed));
  const videos = jsonFeed.feed.entry.slice(0, 4).map((entry) => {
    const { title, id } = entry;
    const videoId = id.split('/').pop().replace('yt:video:', '');
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    return {
      title,
      url: videoUrl,
      thumbnail: entry['media:group']['media:thumbnail'].url,
    };
  });

  return {
    props: {
      videos
    },
    revalidate: 60,
  }
}
