import styles from "@/app/styles/common.module.css";
import Image from "next/image";

const MovieDetail = async ({ params }) => {

    const id = params.id;

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
    const result = data.results.find((item) => item.imdbid === id);
    console.log(result.synopsis.substring(0,6));

    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.movie_title}> Netflix \ <span>{result.type}</span></h2>\
                <div className={styles.card_section}>
                    <div>
                        <Image src={result.imageurl[0]} alt={result.title} width={500} height={400} />
                    </div>
                    <div>
                        <h1>{result.title}</h1>
                        <p>{result.synopsis}</p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default MovieDetail