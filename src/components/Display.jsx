import '../style/Display.css'
export default function ({ current, result }) {
    return (
        <div className='display'>
            <div className='result'>{result}</div>
            <div className='current'>{current}</div>
        </div>
    )
}