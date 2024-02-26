import videobg from '../assets/video/video.mp4'
import './Section.css'

const Video = () => {
	return (
		<div className="section">
			<div className="overlay"></div>
			<div className='video-container'>
				<video src={videobg} autoPlay loop muted playsInline className="video-clip">
				</video>
			</div>
			<div className="content-container">
				<div className='content-info'>
					<h1>Built by developers.<br />
						For developers.<br />
						With fair terms for all.<br />
						Let's build incredible things together.</h1>
					<div className='content-button'>Learn more about us.</div>
				</div>
			</div>
		</div>
	)
}

export default Video