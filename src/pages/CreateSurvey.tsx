
import { useCallback } from 'react';
import '../../node_modules/survey-core/survey-core.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

const surveyJson = {
  elements: [{
    name: "FirstName",
    title: "Enter your first name:",
    type: "text"
  }, {
    name: "LastName",
    title: "Enter your last name:",
    type: "text"
  }]
}

const CreateSurvey = () => {
  const survey = new Model(surveyJson);

  const alertResults = useCallback((survey: Model) => {
    const results = JSON.stringify(survey.data);
    alert(results);
  }, []);

  survey.onComplete.add(alertResults);

  return (<Survey model={survey} />);
}

export default CreateSurvey