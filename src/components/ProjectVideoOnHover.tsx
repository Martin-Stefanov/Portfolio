
const ProjectVideoOnHover = ({
  videoPath
}: {
  videoPath: string;
}) => {

  return (
    <div className="relative h-full w-full">
      <video
        autoPlay
        loop
        muted
        className="w-full h-full top-1/2 left-1/2 object-cover rounded-md"
      >
        <source src={videoPath} type="video/mp4" />
      </video>
    </div>
  );
}

export default ProjectVideoOnHover;