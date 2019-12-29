import { Router } from "express";

const url = "https://api.tvmaze.com/search/shows?q=batman";
const router = new Router();

fetch(url).then( (results) => {return results.json();})
    .then((data) => {
        router.get( "/shows", ( req, res ) => {
            setTimeout( () => res.json( { shows: data.map( Info ) } ), 500 );
        } );

        router.get( "/shows/:permalink", ( req, res ) => {
            console.log(data);
            setTimeout( () => res.json( { show: data.find( p => p.show.id == req.params.permalink ) } ), 500 );
        } );

        function Info( show ) {
            return {
                id: show.show.id,
                name: show.show.name,
                type: show.show.type,
                status: show.show.status,
                premiered: show.show.premiered,
                language: show.show.language,
                permalink: show.show.id,
                imageUrl: show.show.image.original,
                summary: show.show.summary,
            };
        }
    });
export default router;