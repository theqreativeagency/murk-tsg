import { useEffect, useState } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';
import Modal from 'react-modal';

type Video = {
  id: string;
  title: string;
};

const VideoPlayer: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // Make an API request to fetch the list of videos
        const response = await axios.get('/api/videos');
        setVideos(response.data);
      } catch (error) {
        console.error('Failed to fetch videos:', error);
      }
    };

    fetchVideos();
  }, []);

  const handleVideoClick = (video: Video) => {
    setSelectedVideo(video);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setModalIsOpen(false);
  };

  const youtubeOptions = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="container mx-auto mt-8 mb-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        <img
          className="w-4/5 mx-auto -m-20 2xl:-m-32 2xl:mx-auto 2xl:w-2/5 xl:-m-32 xl:mx-auto xl:w-2/5 lg:-m-20 lg:mx-auto lg:w-2/5 md:-m-32 md:mx-auto sm:-m-20 sm:mx-auto sm:w-4/5"
          src="/videos.png"
          alt="Book MurkTSG"
        />
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-red-500 rounded-lg overflow-hidden shadow-md cursor-pointer hover:bg-blue-500 hover:bg-opacity-90 transition duration-300 transform hover:-translate-y-1 hover:scale-105"
            onClick={() => handleVideoClick(video)}
          >
            <img
              src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
              alt={video.title}
              className="w-full"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-white">{video.title}</h2>
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="m-auto w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/2 outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
        contentLabel="Video Player Modal"
      >
        <div className="relative w-full h-96">
          {selectedVideo && (
            <YouTube videoId={selectedVideo.id} opts={youtubeOptions} className="w-full h-full" />
          )}
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 bg-white text-black rounded-full p-2"
          >
            &times;
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default VideoPlayer;


