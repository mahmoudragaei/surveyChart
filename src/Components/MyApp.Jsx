import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { surveyJson } from './data.js'
import { Survey } from 'survey-react-ui';
import { useCallback } from 'react';
import MyChart from './MyChart.tsx';
import { useState } from 'react'

export default function MyApp() {
  const survey = new Model(surveyJson);

  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    alert(results);
  }, []);

  survey.onComplete.add(alertResults);





  
  return (<Survey model={survey} />);
  //return <MyChart/>
}