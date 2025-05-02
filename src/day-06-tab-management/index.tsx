import { faker } from '@faker-js/faker';

import TabManagementContainer from './TabManagementContainer';
import { TabsManager } from './tabsManagerReducer';
import PostRenderer, { Post } from './PostRenderer';

// Function to generate a new Post dynamically
const generateNewPost = (): Post => {
  const MIN = 1;
  const MAX = 3
  const wordCount = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN; // Random number between MIN and MAX
  return {
    id: faker.string.uuid(),
    title: faker.lorem.words(wordCount),
    content: faker.lorem.paragraph(),
  };
};

const initialState: TabsManager<Post> = {
  tabs: Array.from({ length: 3 }, () => generateNewPost()),
  activeTabId: null,
};

const TabManagementConsumer = () => {
  return <TabManagementContainer<Post> initialState={initialState} renderTabContent={PostRenderer} newTabHandler={generateNewPost} />;
};

export default TabManagementConsumer;
