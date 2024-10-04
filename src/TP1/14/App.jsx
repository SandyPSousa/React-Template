import React from 'react';
import ForumTopic from './src/components/ForumTopic';
import ContributionForm from './src/components/ContributionForm';
import Menu from './src/components/Menu';
import RecentTopics from './src/components/RecentTopics';
import styles from "./src/components/styles.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Menu />
      <ForumTopic />
      <ContributionForm />
      <RecentTopics />
    </div>
  );
}

export default App;

