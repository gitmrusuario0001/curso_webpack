import '../css/index.css'
import search from './search'
import render from './render'
// import text from './text';

 const id = prompt('quien es ese pokemon')
 
 search(id)
 .then((data)=>{
  render(data);
 }).catch(()=>{
   console.log('no hubo pokemo')
 })


// text();

// if (module.hot) {
//     module.hot.accept('./text.js', function() {
//       console.log('he recargado en caliente')
//       text()
//     })
//   } 