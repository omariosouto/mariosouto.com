import { websitePageHOC } from '@src/components/wrappers/websitePageHOC/websitePageHOC';
import { NewsletterScreen } from '@src/components/screens/NewsletterScreen/NewsletterScreen';

// export default HomeScreen;
export default websitePageHOC(NewsletterScreen);
