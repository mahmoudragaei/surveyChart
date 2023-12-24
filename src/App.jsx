import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { surveyJson } from './Components/data.js'
import { Survey } from 'survey-react-ui';
import { useCallback } from 'react';
import MyChart from './Components/MyChart.tsx';
import { useState } from 'react'


function App() {

  const [data, updateDate] = useState();

  const survey = new Model(surveyJson);

  const alertResults = useCallback((sender) => {
    console.log(sender.data);
    calcScores(sender.data);
  }, []);

  const calcScores = useCallback((sender) => {
    console.log(sender);
    calcScore(sender, updateDate);
  }, []);

  survey.onComplete.add(alertResults);
  return (<section>
    {!data && <Survey model={survey} />}
    {data && <MyChart data={data} />}
  </section>);
  //return <MyChart data ={data}/>
}
function calcSelectScore(select) {
  if (select === 'آه')
    return 1;
  if (select === 'بتحصل')
    return 0.5;
  return 0;
}
function calcScore(result, updateDate) {
  let score1 = 0;
  score1 = score1 + calcSelectScore(result.question.q6);
  score1 = score1 + calcSelectScore(result.question.q13);
  score1 = score1 + calcSelectScore(result.question.q20);
  score1 = score1 + calcSelectScore(result.question.q27);
  score1 = score1 + calcSelectScore(result.question.q34);
  score1 = score1 + calcSelectScore(result.question.q36);

  let score2 = 0;
  score2 = score2 + calcSelectScore(result.question.q4);
  score2 = score2 + calcSelectScore(result.question.q11);
  score2 = score2 + calcSelectScore(result.question.q18);
  score2 = score2 + calcSelectScore(result.question.q25);
  score2 = score2 + calcSelectScore(result.question.q32);
  score2 = score2 + calcSelectScore(result.question.q41);

  let score3 = 0;
  score3 = score3 + calcSelectScore(result.question.q7);
  score3 = score3 + calcSelectScore(result.question.q14);
  score3 = score3 + calcSelectScore(result.question.q21);
  score3 = score3 + calcSelectScore(result.question.q28);
  score3 = score3 + calcSelectScore(result.question.q35);
  score3 = score3 + calcSelectScore(result.question.q37);

  let score4 = 0;
  score4 = score4 + calcSelectScore(result.question.q5);
  score4 = score4 + calcSelectScore(result.question.q12);
  score4 = score4 + calcSelectScore(result.question.q19);
  score4 = score4 + calcSelectScore(result.question.q26);
  score4 = score4 + calcSelectScore(result.question.q33);
  score4 = score4 + calcSelectScore(result.question.q42);

  let score5 = 0;
  score5 = score5 + calcSelectScore(result.question.q1);
  score5 = score5 + calcSelectScore(result.question.q8);
  score5 = score5 + calcSelectScore(result.question.q15);
  score5 = score5 + calcSelectScore(result.question.q22);
  score5 = score5 + calcSelectScore(result.question.q29);
  score5 = score5 + calcSelectScore(result.question.q38);

  let score6 = 0;
  score6 = score6 + calcSelectScore(result.question.q2);
  score6 = score6 + calcSelectScore(result.question.q9);
  score6 = score6 + calcSelectScore(result.question.q16);
  score6 = score6 + calcSelectScore(result.question.q23);
  score6 = score6 + calcSelectScore(result.question.q30);
  score6 = score6 + calcSelectScore(result.question.q39);

  let score7 = 0;
  score7 = score7 + calcSelectScore(result.question.q3);
  score7 = score7 + calcSelectScore(result.question.q10);
  score7 = score7 + calcSelectScore(result.question.q17);
  score7 = score7 + calcSelectScore(result.question.q24);
  score7 = score7 + calcSelectScore(result.question.q31);
  score7 = score7 + calcSelectScore(result.question.q40);
  

  updateDate([
    {
      data: [
        {
          Category: "السخط",
          Score: score1,
        }
      ]
    },
    {
      data: [
        {
          Category: "الضعف والهوان",
          Score: score2,
        }
      ]
    },
    {
      data: [
        {
          Category: "الفوات",
          Score: score3,
        }
      ]
    },
    {
      data: [
        {
          Category: "الملل والكسل",
          Score: score4,
        }
      ]
    },
    {
      data: [
        {
          Category: "الوحشة",
          Score: score5,
        }
      ]
    },
    {
      data: [
        {
          Category: "فقد الأمل",
          Score: score6,
        }
      ]
    },
    {
      data: [
        {
          Category: "قصر النظر",
          Score: score7,
        }
      ]
    }
  ]);
}

export default App;