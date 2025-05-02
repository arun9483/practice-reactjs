import { faker } from '@faker-js/faker';

import TabManagementContainer from './TabManagementContainer';
import { TabsManager } from './tabsManagerReducer';
import PostRenderer, { Post } from './PostRenderer';
import { useState } from 'react';

// Function to generate a new Post dynamically
const generateNewPost = (): Post => {
  const MIN = 1;
  const MAX = 3;
  const wordCount = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN; // Random number between MIN and MAX
  return {
    id: faker.string.uuid(),
    title: faker.lorem.words(wordCount),
    content: faker.lorem.paragraph(),
  };
};

const TabManagementConsumer = () => {
  const [tabSet, setTabSet] = useState<string>(faker.string.uuid());

  const tabs: Post[] = Array.from({ length: 3 }, () => generateNewPost());

  const initialState: TabsManager<Post> = {
    tabs,
    activeTabId: tabs[tabs.length - 1].id,
  };

  return (
    <div>
      <button onClick={() => setTabSet(faker.string.uuid())}>Reset Tabs</button>
      <TabManagementContainer<Post>
        key={tabSet}
        initialState={initialState}
        renderTabContent={PostRenderer}
        newTabHandler={generateNewPost}
      />
    </div>
  );
};

export default TabManagementConsumer;
