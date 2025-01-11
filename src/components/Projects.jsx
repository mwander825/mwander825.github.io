import React from 'react';
import github_mark from "../static/media/github-mark.png";

const Projects = () => {
    return (
        <div id="projects" class="page-container">
            <title>Projects</title>
            <h1>Projects</h1>
            <p>Some project(s) I've been working on</p>
            <div>
                <ul>
                        <h2 class="project-link">
                        <a rel="noopener noreferrer" target="_blank"  
                        title="or: How I Learned to Stop Worrying and Love the Internship"
                        href="https://mwander825.github.io/dashjourney">
                            Journey to an Entry-Level Job
                        </a>
                        <a href="https://github.com/mwander825/dashjourney" rel="noopener noreferrer" target="_blank" class="github-link">
                            <img class="github-link" src={github_mark} alt="(GitHub)"/>
                            </a>
                        </h2>
                   <p>
                   An overview of my job-search process, and some visualizations of my application results.
                   Made with Dash + plotly (exported to .html for a static webpage), with testing done using matplotlib and pandas.
                   </p>

                </ul>
            </div>
            <div>
                        <h2 class="project-link">
                        <a rel="noopener noreferrer" target="_blank"  
                        title="&quot;Collected Sounds&quot;"
                        href="https://github.com/mwander825/foo-soni-collecti">
                            foo_soni_collecti (Soni Collecti)
                        </a>
                        <a href="https://github.com/mwander825/foo-soni-collecti" rel="noopener noreferrer" target="_blank" class="github-link">
                            <img class="github-link" src={github_mark} alt="(GitHub)"/>
                            </a>
                        </h2>
                   <p>
                   An old foobar2000 component which I revived for the new x64 version of foobar2000,
                   which is an offline scrobbler that logs playback statistics to a local .csv file.
                   </p>
            </div>
        </div>    
    );
}

export default Projects;