import React from 'react'
import "./Skill.css"
const frontendSkills=[
    {
        title:'React.Js',
  
        percentage:'85%',
    },
    {
        title:'Javascript',
      
        percentage:'85%',
    },
    {
        title:'Css',
       
        percentage:'75%',
    },
    {
        title:'Html',

        percentage:'90%',
    },
]
const backendSkills=[
    {
        title:'React.Js',
        
        percentage:'85%',
    },
    {
        title:'Javascript',
        
        percentage:'85%',
    },
    {
        title:'Css',
        
        percentage:'75%',
    },
    {
        title:'Html',
        
        percentage:'90%',
    },
]
const Skill = () => {
    
  return (<div className='skills_wrapper d-flex gap-5'>
  <div className='frontend_skill w-50'>
{
    frontendSkills.map((item,index)=>(
      <SkillItem key={index} title={item.title} percentage={item.percentage}/>
    ))}
  </div>
  <div className='backend_skill w-50'>{
    backendSkills.map((item,index)=>(
        <SkillItem key={index} title={item.title} percentage={item.percentage}/>
    ))
  }
</div>
  </div>
  )
}
const SkillItem=({title,percentage})=>{
  return  <div className='skill_data mb-3'>
    <div className='skill_title d-flex align-items-center justify-content-between'>
        <h6>{title} </h6>
        <span>
            {percentage}
        </span>
    </div>
    <div className='skill_bar'>
    <span className='skill_bar-percentage'style={{width:`${percentage}`}}></span>
    </div>
            </div>
}

export default Skill