// @flow
import React from 'react'

export default function StudentTreeLeaf(props) {
  // const {
  //   imageAddress,
  //   projectTitle,
  //   projectDes,
  //   projectLink,
  // } = props;

  const imageAddress = 'add'
  const projectTitle = 'Project Title'
  const projectDes =
    'We are building contraptions to fit onto doors of local take-out restaurants so people can open the doors without having to touch the door handles with their hands'
  const projectLink = 'ww.proj.org'

  return (
    <div>
      <img className="projImage" src={imageAddress}></img>
      <h3 className="projTitle">{projectTitle}</h3>
      <p>{projectDes}</p>
      <button>
        <a className="projLink" href={projectLink}>
          {' '}
          visit{' '}
        </a>
      </button>
    </div>
  )
}
