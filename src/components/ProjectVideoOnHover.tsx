
const ProjectVideoOnHover = ({
  videoPath
}: {
  videoPath: string;
}) => {

  return (
    <div className="relative h-[70vh]">
      <video
        autoPlay
        loop
        muted
        className="absolute w-[52%] h-[69%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl"
      >
        <source src={videoPath} type="video/mp4" />
      </video>
    </div>
  );
}

export default ProjectVideoOnHover;