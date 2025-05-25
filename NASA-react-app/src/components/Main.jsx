export default function Main(props) {
    const { data } = props
  return (
    <div className="imageContainer">
        <img src={data.hdur} alt={data.title || 'bg-img'} className="bgImage"/>
    </div>
  )
}