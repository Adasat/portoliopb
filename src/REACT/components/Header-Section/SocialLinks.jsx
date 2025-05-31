import React from 'react'
import LinkedinIconReact from '../../../assets/icons/LinkedinIconReact'
import GitHubIconReact from '../../../assets/icons/GithubIconReact'

export const SocialLinks = () => {
  return (
    <div className={`flex gap-4`}>
      
      <a href="https://linkedin.com/in/pedro-bonilla-bolanos" target="_blank" rel="noopener noreferrer" class="cursor-pointer">
        <LinkedinIconReact />
      </a>
      <a href="https://github.com/Adasat" target="_blank" rel="noopener noreferrer" class="cursor-pointer">
        <GitHubIconReact />
      </a>
    </div>
  )
}
