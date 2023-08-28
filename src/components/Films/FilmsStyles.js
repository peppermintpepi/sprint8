import styled from 'styled-components';

const FilmContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
`

const FilmPoster = styled.div`
    margin: 10px;
    width: 20%;
    height: 100%;
    position: relative;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const FilmTitle = styled.p `
    font-family: Arial, Helvetica, sans-serif;
    color: #adb5bd;
    font-size: 1rem;
`

export { FilmContainer, FilmPoster, FilmTitle };
