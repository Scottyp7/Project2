import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function CustomImageList() {
  return (
    <ImageList
      sx={{
        width: 600,
        height: 1265,
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: 'translateZ(0)',
      }}
      rowHeight={200}
      gap={1}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.title}`}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://t4.ftcdn.net/jpg/03/66/02/15/360_F_366021597_p0n7ogk22jHJEtpZ9yj7puD2dVvNKcl0.jpg',
    title: 'Football',
    author: '@bkristastucchio',
    featured: true,
  },
  {
    img: 'https://cdn.pixabay.com/photo/2020/11/27/18/59/tennis-5782695_640.jpg',
    title: 'Tennis',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfSQ76NtALb1iY1QXCoDrj5qm_u7JSLYSd3A&s',
    title: 'Golf',
    author: '@helloimnik',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCcXc3ekaAVfZF1snoSrYWsgktuQF6XFlBLw&s',
    title: 'Crticket',
    author: '@nolanissac',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvHLoQEYVuN9eMADY1X_PXO4Ug037VrFA9mQ&s',
    title: 'Formula1',
    author: '@hjrc33',
  },
  {
    img: 'https://thumbs.dreamstime.com/b/healthy-lifestyle-fitness-sports-woman-running-sunrise-road-39709089.jpg',
    title: 'Running',
    author: '@arwinneil',
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://w0.peakpx.com/wallpaper/474/449/HD-wallpaper-bicycle-road-bike-cyclist-cycling-concepts.jpg',
    title: 'Cycling',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images5.alphacoders.com/575/575603.jpg',
    title: 'Swimming',
    author: '@silverdalex',
  },
  {
    img: 'https://t4.ftcdn.net/jpg/02/20/78/17/360_F_220781783_BquhdXwojesZLER7E3GqlmSJEje4ea9f.jpg',
    title: 'Rugby',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
  },
];