import MovieCard from "@/components/MovieCard";
import styles from "@/app/styles/common.module.css"

const Movie = async () => {

  const url = process.env.RAPID_KEY;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8e02d55657mshea9d3d5b8ba5103p1d6faajsn38c5272e29eb',
      'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
    }
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const result = data.results;

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <div className={styles.card_section}>
            {
              result.map((curElem) => {
                return <MovieCard key={curElem.id} {...curElem} />
              })
            }
          </div>
        </div>

      </section>

    </>
  )
}

export default Movie