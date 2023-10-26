import React from 'react'
import { skills } from '../data/Skills';

const container = `bg-gray-700 text-gray-100`;
const wrapper = `flex flex-col justify-center items-center p-4 gap-4`;
const skillContainer = 'flex flex-col p-2 md:p-3 md:grid md:gap-2 grid-cols-2 grid-rows-auto' ;
const skillStyle = 'flex flex-col justify-center items-center bg-gray-950 p-2 md:p-3 m-2 md:m-3 rounded-xl';
const skillTitle = 'text-yellow-500 text-xl text-center mb-3';
const skillList = 'flex flex-row flex-wrap gap-3 justify-center items-center p-3';
const oneSkillStyle = 'flex flex-row justify-center items-center p-2 bg-gray-950 border-gray-700 border-2 rounded-xl gap-2';
const skillImage = 'h-8 w-auto';
const skillName = 'text-gray-300';

function Skills() {
  return (
    <>

      <div className={container}>

        <div className={wrapper}>

          <div className="title">Skills</div>
          <div className="desc">Here are some of my skills on which I have worked </div>

          <div className={skillContainer}>
            {
              skills.map((oneSection) => (
                <div className={skillStyle}>
                  <div className={skillTitle}>{oneSection.title}</div>
                  <div className={skillList}>
                    {
                      oneSection.skill.map((item) => (
                        <div className={oneSkillStyle}>
                          <img className={skillImage} src={item.image} alt="" />
                          <span className={skillName}>{item.name}</span>
                        </div>
                      ))
                    }
                  </div>
                </div>
              ))
            }

          </div>

        </div>

      </div>

    </>
  )
}

export default Skills