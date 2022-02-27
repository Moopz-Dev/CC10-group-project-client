// import React from 'react'

// const ImageList = () => {
//   return (
//     <div>
//         <ImageList
//           sx={{
//             width: 390,
//             Height: '100%',
//             margin: 0,
//             overflow: 'visible',
//           }}
//           cols={3}
//           rowHeight={160}
//           gap={1}
//         >
//           {userPosts.map((item) => (
//             <ImageListItem key={item.PostMedia[0].media}>
//               <img
//                 src={`${item.PostMedia[0].media}?w=140&h=140&fit=crop&auto=format`}
//                 srcSet={`${item.PostMedia[0].media}?w=140&h=140&fit=crop&auto=format&dpr=2 2x`}
//                 alt=''
//                 height={140}
//                 onClick={handleClickOpenPostUserDialog}
//                 style={{ overflow: 'hidden' }}
//               />
//             </ImageListItem>
//           ))}
//         </ImageList>
//     </div>
//   )
// }

// export default ImageList