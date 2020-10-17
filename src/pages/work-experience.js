/**
 * Route: Work Experience
 */

const workExperienceList = [
  {
    id: 1,
    company: {
      name: 'Baythium',
      logoUrl: null,
    },
    position: ['Founder'],
    start: '1/1/2019',
    end: null,
    workingTime: 'Full-Time',
  },
  {
    id: 2,
    position: [
      'Lead Full-Stack Web Developer',
      'API Architect',
      'IBM DataPower Gateway Developer',
    ],
    company: {
      name: 'Bank of the United States',
      logoUrl: null,
    },
    start: '11/1/2018',
    end: '12/1/2019',
    workingTime: 'Full-Time',
  },
];

const WorkExperience = () => {
  return (
    <div>
      <h1>Work Experience</h1>
      <p>Description</p>
    </div>
  )
}

export default WorkExperience;