
import { useState, useEffect } from 'react'
import QuoteCard from './QuoteCard'
function QuoteApp() {
  const [quote,setQuote] = useState(null);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);

  const getNewQuote = async () => {
    setLoading(true)
    setError(null)
    try{
      const res = await fetch('https://dummyjson.com/quotes/random')
      const data = await res.json()

      setQuote({
        content: data.quote,
        author: data.author
      })
    } catch(err){
      setError("Ma'lumotni yuklashda xatolik yuz berdi!")
      console.error("Xato tafsiloti", err)
    }
    setLoading(false)
  
  }
  
  useEffect(() => {
    getNewQuote()
  }, [])

  return (
    <div style={{
      maxWidth:'600px',
      margin:'50px auto',
      textAlign:'center'
    }}>
      <h1>Kun Hikmati</h1>
      
      {loading && <p>Yuklanmoqda...</p>}
      {error && <p style={{color:'red'}}>{error}</p>}
      {!loading && !error && quote && (
        <QuoteCard matn={quote.content} muallif={quote.author} />
      )}
      
      <button onClick={getNewQuote} style={{
        marginTop:'20px',
        padding:'10px'
      }}>
        Yangi Hikmat
      </button>
    </div>
  )
}
export default QuoteApp;