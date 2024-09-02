// document.addEventListener('DOMContentLoaded', function() {
//   const menuBtn = document.getElementById('menu-btn');
//   const navbar = document.querySelector('.Header .navbar');
//   const navLinks = document.querySelectorAll('.navbar a');

//   if (menuBtn && navbar) {
//       menuBtn.onclick = function() {
//           navbar.classList.toggle('active');
//           menuBtn.classList.toggle('fa-times');
//       }
//   }

//   // Smooth scrolling for navigation links
//   navLinks.forEach(link => {
//       link.addEventListener('click', function(event) {
//           event.preventDefault(); // Prevent the default anchor click behavior
//           const targetId = this.getAttribute('href'); // Get the target section id
//           const targetSection = document.querySelector(targetId);

//           if (targetSection) {
//               targetSection.scrollIntoView({
//                   behavior: 'smooth'
//               });

//               // Close the navbar if it's active
//               if (navbar.classList.contains('active')) {
//                   navbar.classList.remove('active');
//                   menuBtn.classList.remove('fa-times');
//               }
//           }
//       });
//   });
// });

async function fetchNotes() {
  const branch = document.getElementById('branch').value;
  const department = document.getElementById('department').value;
  const semester = document.getElementById('semester').value;
   

   
  const response = await fetch(`/notes?branch=${branch}&department=${department}&semester=${semester}`);
  if (!response.ok) {
      console.error('Failed to fetch notes');
      return;
  }
  const notes = await response.json();

  const notesTableBody = document.querySelector('#notesTable tbody');
  notesTableBody.innerHTML = ''; // Clear previous notes

  notes.forEach(note => {
      const row = notesTableBody.insertRow();
      row.innerHTML = `
          <td>${note.serial_number}</td>
          <td>${note.course_code}</td>
          <td>${note.subject_name}</td>
          <td>${note.module_1}</td>
          <td><a href="/uploads/${note.pdf}" target="_blank">View PDF</a></td>
      `;
  });
}
let inactivityTime = function () {
  let time;
  window.onload = resetTimer;
  document.onmousemove = resetTimer;
  document.onkeypress = resetTimer;

  function logout() {
      window.location.href = "/logout";
  }

  function resetTimer() {
      clearTimeout(time);
      time = setTimeout(logout, 20 *10 * 1000); // 15 minutes
  }
};

inactivityTime();
 
function toggleDropdown() {
  var dropdown = document.getElementById('dropdown-menu');
  var isVisible = dropdown.style.display === 'block';
  dropdown.style.display = isVisible ? 'none' : 'block';

  if (!isVisible) {
      var rect = dropdown.getBoundingClientRect();
      var viewportWidth = window.innerWidth;

      if (rect.left) {
          dropdown.style.left = 'auto';
          dropdown.style.right = 0;
      }  
  }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.closest('.profile')) {
      var dropdown = document.getElementById('dropdown-menu');
      if (dropdown.style.display === 'block') {
          dropdown.style.display = 'none';
      }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.getElementById('menu-btn');
  const navbar = document.querySelector('.Header .navbar');

  if (menuBtn && navbar) {
      menuBtn.onclick = function() {
          navbar.classList.toggle('active');
          menuBtn.classList.toggle('fa-times');
      }
  }
});
// login
// const modal2 = document.querySelector('.login');
// const overlay2 = document.querySelector('.overlay');
// const btnCloseModal2 = document.querySelector('.close-login');
// const btnsOpenModal2 = document.querySelectorAll('.show-login');

// const openModal2 = function () {
//   modal2.classList.remove('hidden');
//   overlay2.classList.remove('hidden');
// };

// const closeModal2 = function () {
//   modal2.classList.add('hidden');
//   overlay2.classList.add('hidden');
// };

 

 

// document.addEventListener('keydown', function (e) {
//   // console.log(e.key);

//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });

// notes selection
//  document.addEventListener("DOMContentLoaded", function() {
//   const findnotes = document.querySelector('.findbtn');

//   if (findnotes) {
// findnotes.addEventListener('click',function(){
//   const branch = document.getElementById('branch').value;
//   const department = document.getElementById('department').value;
//   const semester = document.getElementById('semester').value;
//   const noteResult = document.getElementById('noteResult');

 


//  if (branch === 'B tech' && department === 'cse' && semester === 'semester1') {
      
//       noteResult.innerHTML = `
//           <h2>B Tech -Computer science engineering- Semester 1 Notes</h2> 
// <div class="table-container">        
// <table>
// <tr bgcolor="black">
// <th>s.no</th>
// <th width= 106 % ">Course code</th>
// <th width="50%">Course name</th>
// <th width= "15% ">Module</th>
// <th width= "15%" >PDF Link</th>

// </tr>
// <tr bgcolor="lightgrey">
// <td >1.</td>
// <td>PHD 1182</td>
// <td>Engineering Physics</td>
// <td>Module 1</td>
// <td><a href="/media/Btech/CSE/semester1/PHD 1182-Engineering Physics/module1/mod1.pdf" target="_blank">click here</a></td>

// </tr>
// <tr >
// <td></td>
// <td></td>
// <td> </td>
// <td>Module 2</td>
// <td><a href="/media/Btech/CSE/semester1/PHD 1182-Engineering Physics/module2/mod2.pdf" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td> </td>
// <td> </td>
// <td>module 3</td>
// <td><a href="/media/Btech/CSE/semester1/PHD 1182-Engineering Physics/module3/mod3.pdf" target="_blank">click here</a></td>

// </tr>
// <tr >
// <td></td>
// <td></td>
// <td> </td>
// <td>Module 4</td>
// <td><a href="/media/Btech/CSE/semester1/PHD 1182-Engineering Physics/module4/mod4.pdf" target="_blank">click here</a></td>

// </tr>
// <tr >
// <td></td>
// <td></td>
// <td> </td>
// <td>Module 5</td>
// <td><a href="/media/Btech/CSE/semester1/PHD 1182-Engineering Physics/module5/mod5.pdf" target="_blank">click here</a></td>

// </tr>

// <tr bgcolor="lightgrey" >
//   <td>2.</td>
//   <td>CHD 1182</td>
//   <td>Chemistry for Electrical and Electronic Engineering</td>
//   <td>Module 1</td>
//   <td><a href="/media/Btech/CSE/semester1/CHD 1182-Chemistry For Electrical And Electronic Engineering/module1/mod1.pdf" target="_blank">click here</a></td>

// </tr>
// <tr >
//  <td></td>
// <td></td>
//  <td></td>
//   <td>Module 2</td>
//   <td><a href="/media/Btech/CSE/semester1/CHD 1182-Chemistry For Electrical And Electronic Engineering/module2/mod2.pdf" target="_blank">click here</a></td>

// </tr>
// <tr >
//   <td></td>
//   <td></td>
//   <td></td>
//   <td>Module 3</td>
//   <td><a href="/media/Btech/CSE/semester1/CHD 1182-Chemistry For Electrical And Electronic Engineering/module3/mod3.pdf" target="_blank">click here</a></td>

// </tr>
// <tr >
//   <td></td>
//   <td></td>
//   <td></td>
//   <td>Module 4</td>
//   <td><a href="/media/Btech/CSE/semester1/CHD 1182-Chemistry For Electrical And Electronic Engineering/module4/mod4.pdf" target="_blank">click here</a></td>

// </tr>
// <tr > 
//   <td></td>
//  <td></td>
//   <td></td>
//   <td>Module 5</td>
//   <td><a href="/media/Btech/CSE/semester1/CHD 1182-Chemistry For Electrical And Electronic Engineering/module5/mod5.pdf" target="_blank">click here</a></td>

// </tr>
// <tr bgcolor="lightgrey">
// <td>3.</td> 
// <td>MAD 1181</td>       
// <td>Algebra and Differential Calculus</td>
// <td>Module 1</td>
// <td><a href="/media/Btech/CSE/semester1/MAD 1181-Algebra And Differential Calculus/module1/mod1.pdf" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="/media/Btech/CSE/semester1/MAD 1181-Algebra And Differential Calculus/module2/mod2.pdf" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td> </td>
// <td></td>
// <td>module 3</td>
// <td><a href="/media/Btech/CSE/semester1/MAD 1181-Algebra And Differential Calculus/module3/mod3.pdf" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="/media/Btech/CSE/semester1/MAD 1181-Algebra And Differential Calculus/module4/mod4.pdf" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="/media/Btech/CSE/semester1/MAD 1181-Algebra And Differential Calculus/module5/mod5.pdf" target="_blank">click here</a></td>

// </tr>
// <tr bgcolor="lightgrey">
// <td>4.</td> 
// <td>GED 1101</td> 
// <td>  Engineering Graphics</td>
// <td>Module 1</td>
// <td><a href="/media/Btech/CSE/semester1/GED 1101-Engineering Graphics/module1/mod1.pdf" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="/media/Btech/CSE/semester1/GED 1101-Engineering Graphics/module2/mod2.pdf" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td> </td>
// <td></td>
// <td>module 3</td>
// <td><a href="/media/Btech/CSE/semester1/GED 1101-Engineering Graphics/module3/mod3.pdf" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="/media/Btech/CSE/semester1/GED 1101-Engineering Graphics/module4/mod4.pdf" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="/media/Btech/CSE/semester1/GED 1101-Engineering Graphics/module5/mod5.pdf" target="_blank">click here</a></td>

// </tr>
// <tr bgcolor="lightgrey">
// <td>5.</td> 
// <td>GED 1102</td>

// <td>Engineering Design</td>
// <td>Module 1</td>
// <td><a href="/media/Btech/CSE/semester1/GED 1102-Engineering Design/module1/mod1.pdf" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="/media/Btech/CSE/semester1/GED 1102-Engineering Design/module2/mod2.pdf" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td> </td>
// <td></td>
// <td>module 3</td>
// <td><a href="/media/Btech/CSE/semester1/GED 1102-Engineering Design/module3/mod3.pdf" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="/media/Btech/CSE/semester1/GED 1102-Engineering Design/module4/mod4.pdf" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="/media/Btech/CSE/semester1/GED 1102-Engineering Design/module5/mod5.pdf" target="_blank">click here</a></td>

// </tr>
// <tr bgcolor="lightgrey">    
// <td>6.</td> 
// <td>GED 1103 </td
// <tr bgcolor="lightgrey">
// <td> manufactoring laboratoty practice </td>
// <td>Lab</td>
// <td><a href="/media/Btech/CSE/semester1/GED 1103/Manufactoring Laboratoty Practice/lab.pdf" target="_blank">click here</a></td>

// </tr>
// <td></td> 
// <td></td
// <tr>
// <td> ECE lab </td>
// <td>Lab</td>
// <td><a href="/media/Btech/CSE/semester1/GED 1103/ECE Lab/lab.pdf" target="_blank">click here</a></td>

// </tr>
// <td></td> 
// <td></td
// <tr>
// <td> EEE lab </td>
// <td>Lab</td>
// <td><a href="media/Btech/CSE/semester1/GED 1103/EEE Lab/lab.pdf" target="_blank">click here</a></td>

// </tr>
// <tr bgcolor="lightgrey">
// <td>7.</td> 
// <td>GED 1104</td> 
// <td>  Programming for problem solving </td>
// <td>Module 1</td>
// <td><a href="/media/Btech/CSE/semester1/GED 1104-Programming For Problem Solving/module1/mod1.pdf" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="/media/Btech/CSE/semester1/GED 1104-Programming For Problem Solving/module2/mod2.pdf" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td> </td>
// <td></td>
// <td>module 3</td>
// <td><a href="/media/Btech/CSE/semester1/GED 1104-Programming For Problem Solving/module3/mod3.pdf" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="/media/Btech/CSE/semester1/GED 1104-Programming For Problem Solving/module4/mod4.pdf" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="/media/Btech/CSE/semester1/GED 1104-Programming For Problem Solving/module5/mod5.pdf" target="_blank">click here</a></td>

// </tr>

// </tr>
// <tr bgcolor="lightgrey">
// <td>8.</td> 
// <td>GED 1104</td> 
// <td>  Programming for problem solving lab </td>
// <td>Lab</td>
// <td><a href="/media/Btech/CSE/semester1/GED 1104-Programming For Problem Solving Lab/lab.pdf" target="_blank">click here</a></td>

// </tr>
// </table>                
//       `;
//   } else if (branch === 'B tech' && department === 'cse' && semester === 'semester2') {
       
//       noteResult.innerHTML = `
//           <h2>B tech -Computer science engineering - Semester 2 Notes</h2>                   <!--1 sem cse sub 2-->
          
//        <table>
// <tr bgcolor="black">
// <th>s.no</th>
// <th width= 10% ">Course code</th>
// <th width="50%">Course name</th>
// <th width= "15% ">Module</th>
// <th width= "15%" >PDF Link</th>

// </tr>
// <tr bgcolor="lightgrey">
// <td>1.</td> 
// <td>PHDX 05</td>
// <td>semiconductor physics for information technology</td>
// <td>Module1</td>
// <td><a href="https://drive.google.com/file/d/1vZcDfDC21o-8_O5pwLb0OlQKasR8viue/view?usp=drivesdk" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="https://drive.google.com/file/d/1vggx5OpyLrBH6iz-f3zCNKbhbJmrQ3JV/view?usp=drivesdk" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>

// <tr bgcolor="lightgrey">

//   <td>2.</td>
//    <td>CHDX 04</td>
//   <td>functional material and application </td>
//   <td>Module 1</td>
//   <td><a href="https://drive.google.com/file/d/1v9wo9vOCMFsFs94UKhIeldvx6M4gXRmr/view?usp=drivesdk" target="_blank">click here</a></td>

// </tr>
// <tr>
//  <td></td>
//  <td></td>
//  <td></td>
//   <td>Module 2</td>
//   <td><a href="https://drive.google.com/file/d/1vMzi6gL8bPfzkYUBSumXERGW6fmw3Hnm/view?usp=drivesdk" target="_blank">click here</a></td>

// </tr>
// <tr>
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 3</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 4</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr> 
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 5</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr bgcolor="lightgrey">
// <td>3.</td> 
// <td>MAD 1281 </td>
// <td>Advanced calculus</td>
// <td>Module1</td>
// <td><a href="https://drive.google.com/file/d/173hWWyE1ZLnwW0TKEKgeNjtiksEQkDzB/view?usp=drivesdk" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="https://drive.google.com/file/d/174tmVBQhygUspn7GbAX11gFl6pDG_I6b/view?usp=drivesdk" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="https://drive.google.com/file/d/175TSuOPg9OWm2RWNuzs4ux2ttE140uG3/view?usp=drivesdk" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="https://drive.google.com/file/d/17744hzDMjKo4xD_AhrqRjV6OsJ-jHq9f/view?usp=drivesdk" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="https://drive.google.com/file/d/17L0Iv_J_-2AQeJs-LSqq7w2hiIrg__d_/view?usp=drivesdk" target="_blank">click here</a></td>

// </tr>
// <tr bgcolor="lightgrey">
// <td>4.</td>
// <td>GED 1202</td> 
// <td>Basic Electrical and electronics engineering</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr bgcolor="lightgrey">
// <td>5.</td> 
// <td>GED 1201</td>
// <td>Engineering mechanics</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr bgcolor="lightgrey">
// <td>6.</td>
// <td>END 1281</td>
// <td>English for engineers</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr bgcolor="lightgrey">
// <td>7.</td>
// <td>GED 1206</td>
// <td>Environmental Science</td>
// <td>Module1</td>
// <td><a href="https://drive.google.com/file/d/1vhq0S1L7FgO4he9kl997-qnc3gPfykPK/view?usp=drivesdk" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="https://drive.google.com/file/d/1vj79r8-rxkMEvvrjeckrZcRLvpJAr3aH/view?usp=drivesdk" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr bgcolor="lightgrey">
// <td>8.</td>
// <td>CSD 1201</td>
// <td>Object oriented programming </td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr bgcolor="lightgrey">
// <td>9.</td> 
// <td>GED 1202 </td>
// <td> B EEE lab</td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr bgcolor="lightgrey">
// <td>10.</td> 
// <td>CSD 1201</td>
// <td>Object oriented programming lab</td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// </table>        
           
             
//       `;
//   } 
//          else if (branch === 'B tech' && department === 'cse' && semester === 'semester3') {

//       noteResult.innerHTML = `
//           <h2>B Tech-Computer Science engineering- Semester 3 Notes</h2>
                                                       
            
// <table >
// <tr bgcolor="black">
// <th>s.no</th>
// <th width= 10% ">Course code</th>
// <th width="50%">Course name</th>
// <th width= "10% ">Module</th>
// <th width= "10%" >PDF Link</th>
// </tr>
// <tr bgcolor="lightgrey">
// <td>1</td>
// <td></td>
// <td>Human elective</td>
// <td></td>
// <td></td>
// </tr>
// <tr>
// <td></td>
// <td>SSDX 01</td>
// <td>engineering economics and management</td>
// <td>Module 1</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 2</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td>SSDX 02</td>
// <td>Sociology of Science and Technology</td>
// <td>Module 1</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 2</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr> 
// <tr>
// <td></td>
// <td>SSDX 03</td>
// <td>Industrial Economics and Management</td>
// <td>Module 1</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 2</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr> 
// <tr>
// <td></td>
// <td>SSDX 04</td>
// <td>Dynamics of Indian Social Structure</td>
// <td>Module 1</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 2</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr> 
// <tr bgcolor="lightgrey">
// <td>2</td>
// <td></td>
// <td> Math elective</td>
// <td></td>
// <td></td>
// </tr>
// <tr>
// <td></td>
// <td>MADX 02</td>
// <td>Discrete Mathematics</td>
// <td>Module 1</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 2</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td>MADX 03</td>
// <td>Probablity and Statistics</td>
// <td>Module 1</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 2</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr> 
// <tr>
// <td></td>
// <td>MADX 05</td>
// <td>Numerical Methods</td>
// <td>Module 1</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 2</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr> 
// <tr bgcolor="lightgrey" >
// <td>3</td>
// <td>CSD 2101</td>
// <td>Python Programming</td>
// <td>Module1</td>
// <td><a href="https://drive.google.com/file/d/1X3427CtmAd5SCNPpdGlwUP6Kw8VtYqAk/view?usp=sharing" target="_blank">click here</a>
// </td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey" >
// <td>4</td>
// <td>CSD 2103</td>
// <td>Data structure</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>   
// <tr bgcolor="lightgrey">
// <td>5</td>
// <td>CSD 2102</td>
// <td>digital system</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>6</td>
// <td>CSD 2104</td>
// <td>Software Engineering</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr bgcolor="lightgrey">
// <td>7</td>
// <td>GED 2101</td>
// <td>Essential Skills and Aptitude for Engineers</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>8</td>
// <td>CSD 2105</td>
// <td> Python Programming Laboratory </td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>  
// <tr bgcolor="lightgrey">
// <td>9</td>
// <td>CSD 2106</td>
// <td>Data Structures Laboratory</td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr> 
// </table>

//       `;
//   }     else if (branch === 'B tech' && department === 'cse' && semester === 'semester4') {
      
//       noteResult.innerHTML = `
//           <h2>B tech-Computer Science engineering -Semester 4 Notes</h2>
//             <table>
// <tr bgcolor="black">
// <th>s.no</th>
// <th width= 10% ">Course code</th>
// <th width="50%">Course name</th>
// <th width= "15% ">Module</th>
// <th width= "15%" >PDF Link</th>   
// </tr>
// <tr bgcolor="lightgrey">
// <td>1.</td> 
// <td>CSD 2201</td>
// <td>computer communication and networks</td>
// <td>Module1</td>
// <td><a href="https://docs.google.com/presentation/d/1fB9gGMLwLABxGnOVKKU-Nm9dOztGXW-A/edit?usp=drive_link&ouid=102880704366490215577&rtpof=true&sd=true" target="_blank">click here</a></td>

// </tr>

// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="https://docs.google.com/presentation/d/1fBOU-Kjw3dK9--8ybpQM2Jp8uFfM5Tbl/edit?usp=drive_link&ouid=102880704366490215577&rtpof=true&sd=true" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="https://drive.google.com/file/d/16LliTBRKWQ_YD1puGRRACG7sNtr_nBGB/view?usp=drivesdk" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="https://drive.google.com/file/d/16Pw7RsmlGDiwDR9nW8yS8DANPqAYaT7x/view?usp=drivesdk" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>

// <tr bgcolor="lightgrey">

//   <td>2.</td>
//    <td>CSD 2202</td>
//   <td>Analysis of algorithm</td>
//   <td>Module 1</td>
//   <td><a href="https://drive.google.com/file/d/1mUzYE286uowSqLp83mbxJcPdvoQgOLZQ/view?usp=drivesdk" target="_blank">click here</a></td>

// </tr>
// <tr>

//  <td></td>
//  <td></td>
//  <td></td>
//   <td>Module 2</td>
//   <td><a href="https://drive.google.com/file/d/1mfiU2nAMTWGOui3bm-fxB-RxNMdwwCZZ/view?usp=drivesdk" target="_blank">click here</a></td>

// </tr>
// <tr>
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 3</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 4</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr> 
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 5</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr bgcolor="lightgrey">
// <td>3.</td> 
// <td>CSD 2203  </td>
// <td>Computer Architecture and microprocessor</td>
// <td>Module1</td>
// <td><a href="https://drive.google.com/file/d/1i-Kxg6Veyn-IXFWYcXavj6XmHVGqSHbX/view?usp=drivesdk" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="https://drive.google.com/file/d/1i4s7zVKC7E8I3ucfWHDPUoigmVnUkpdj/view?usp=drivesdk" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="https://docs.google.com/presentation/d/e/2PACX-1vTpUZ9e416FMvQOnTVRRc_QaT1j51StoSYmHUa3fUka2Wtx5YBeFNxbAH7KbYvUfA/pub?start=true&loop=true&delayms=3000&slide=id.p5" target="_blank">click here</a></td>

// </tr>
// <tr>

// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr bgcolor="lightgrey">
// <td>4.</td>
// <td>CSD 2204</td> 
// <td>operating Systems</td>
// <td>Module1</td>
// <td><a href="https://drive.google.com/file/d/1alwZzSkCxarIvJCu55y6s6Rb5UbCUKvb/view?usp=drivesdk" target="_blank">click here</a></td>

// </tr>
// <tr>

// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="https://drive.google.com/file/d/1azCMG59PemMifjwPLDyIJ8fRUd5bubES/view?usp=drivesdk" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="https://docs.google.com/presentation/d/1hSHYez61_WC2wiFyOw8tB-R7wu-b5rNA/edit?usp=drivesdk&ouid=107286053246224902318&rtpof=true&sd=true" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr bgcolor="lightgrey">
// <td>5.</td> 
// <td>CSD 2205</td>
// <td>Database Management Systems</td>
// <td>Module1</td>
// <td><a href="https://drive.google.com/file/d/1bwqGeNRcD9BVfqhRkbvBlAZmMlTO--iK/view?usp=drive_link" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="https://drive.google.com/file/d/1rxrvsUOiW4abpC39vZoaBKJhB3HHAGAS/view?usp=drivesdk" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr bgcolor="lightgrey">
// <td>6.</td>
// <td>GED 2201</td>
// <td>Workplace Skills and Aptitude for Engineers</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr bgcolor="lightgrey">
// <td>7.</td>
// <td>GED 2202</td>
// <td>Indian Constitution and Human Rights</td>
// <td>Module1</td>
// <td><a href="https://drive.google.com/file/d/1g9hPSxqDioltpv0U5XOkT41YcUgOSlOl/view?usp=drive_link" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="https://drive.google.com/file/d/1gLic-XgF4vcbA_ZI0venzyt-vPrq5WWk/view?usp=drive_link" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="https://docs.google.com/document/d/1zMAMfuowkFKQLrgtboi2L2lSvXX2QFX5/edit?usp=drivesdk&ouid=107286053246224902318&rtpof=true&sd=true" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>

// <tr bgcolor="lightgrey">
// <td>8.</td>
// <td>PEC</td>
// <td>Professional Elective Courses</td>
// <td></td>
// <td></td>
// </tr>
// <td></td>
// <td>CSDX204</td>
// <td>Scripting Languages</td>
// <td>Module1</td>
// <td><a href="https://docs.google.com/document/d/1uCtLACi3L_axS4Z9udLEX4Khncn8p8qY/edit?usp=drivesdk&ouid=107286053246224902318&rtpof=true&sd=true" target="_blank">click here</a></td>


// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="https://drive.google.com/file/d/1sd5HLpG8n0fvhDHxVzzOk9GIN8wQrDyZ/view?usp=drivesdk" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <td></td>
// <td>CSDX206</td>
// <td>Multimedia Design Program</td>
// <td>Module1</td>
// <td><a href="https://docs.google.com/document/d/1uvWN8bIKFM2bPuCJDuw5DyBFtwb0yQpZ/edit?usp=drivesdk&rtpof=true&sd=true" target="_blank">click here</a></td>


// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="https://docs.google.com/presentation/d/1v3scsPc7uLWLi0PF8NXDh4pFd6JkdnBs/edit?usp=drivesdk&ouid=107286053246224902318&rtpof=true&sd=true" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <td></td>
// <td>CSDX211</td>
// <td>Information Ethics and visualization</td>
// <td>Module1</td>
// <td><a href="https://docs.google.com/presentation/d/e/2PACX-1vSb4jll7JtS5qcOoJC4uQSP0OLo7ckDMuP-u0M-fIPViK1-y11-IDAbiyMYByBxBQ/pub?start=true&loop=true&delayms=3000&slide=id.p1" target="_blank">click here</a></td>


// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="https://docs.google.com/presentation/d/e/2PACX-1vT8Kj_gI29XWT6syAoKu79WGZWcjDMM8rFmNHg0GQ3-64SPi7YaPJVtwCbGspW2oA/pub?start=true&loop=true&delayms=3000&slide=id.p1" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// </tr>

// <tr bgcolor="lightgrey">
// <td>9.</td> 
// <td>CSD 2206</td>
// <td>Computer Communication and Networks Laboratory</td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr bgcolor="lightgrey">
// <td>10.</td> 
// <td>CSD 2207</td>
// <td>Database Management Systems Laboratory</td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// </table>        
          
 
//       `;
//   }     else if (branch === 'B tech' && department === 'cse' && semester === 'semester5') {
      
//       noteResult.innerHTML = `
//           <h2>B tech-Computer Science engineering -Semester 5 Notes</h2>
//             <table>
// <tr bgcolor="black">
// <th>s.no</th>
// <th width= 10% ">Course code</th>
// <th width="50%">Course name</th>
// <th width= "15% ">Module</th>
// <th width= "15%" >PDF Link</th> 
// </tr>
// <tr bgcolor="lightgrey">
// <td>1.</td> 
// <td>CSD 3101</td>
// <td>Theory Of Computation</td>
// <td>Module1</td>
// <td><a href="/media/Btech/CSE/semester5/CSD 3101-Theory Of Computation/module1/mod1.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="/media/Btech/CSE/semester5/CSD 3101-Theory Of Computation/module2/mod2.pdf" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="/media/Btech/CSE/semester5/CSD 3101-Theory Of Computation/module3/mod3.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="/media/Btech/CSE/semester5/CSD 3101-Theory Of Computation/module4/mod4.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="/media/Btech/CSE/semester5/CSD 3101-Theory Of Computation/module5/mod5.pdf" target="_blank">click here</a></td>
// </tr>

// <tr bgcolor="lightgrey">

//   <td>2.</td>
//    <td>CSD 3102</td>
//   <td>Artificial Intelligence Techniques</td>
//   <td>Module 1</td>
//   <td><a href="/media/Btech/CSE/semester5/CSD 3102-Artificial Intelligence Techniques/module1/mod1.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
//  <td></td>
//  <td></td>
//  <td></td>
//   <td>Module 2</td>
//   <td><a href="/media/Btech/CSE/semester5/CSD 3102-Artificial Intelligence Techniques/module2/mod2.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 3</td>
//   <td><a href="/media/Btech/CSE/semester5/CSD 3102-Artificial Intelligence Techniques/module3/mod3.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 4</td>
//   <td><a href="/media/Btech/CSE/semester5/CSD 3102-Artificial Intelligence Techniques/module4/mod4.pdf" target="_blank">click here</a></td>
// </tr>
// <tr> 
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 5</td>
//   <td><a href="/media/Btech/CSE/semester5/CSD 3102-Artificial Intelligence Techniques/module5/mod5.pdf" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>3.</td> 
// <td>CSD 3103</td>
// <td> Network Security And Cryptography</td>
// <td>Module1</td>
// <td><a href="/media/Btech/CSE/semester5/CSD 3103-Network Security And Cryptography/module1/mod1.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="/media/Btech/CSE/semester5/CSD 3103-Network Security And Cryptography/module2/mod2.pdf" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./media/Btech/CSE/semester5/CSD 3103-Network Security And Cryptography/module3/mod3.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="/media/Btech/CSE/semester5/CSD 3103-Network Security And Cryptography/module4/mod4.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="/media/Btech/CSE/semester5/CSD 3103-Network Security And Cryptography/module5/mod5.pdf" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>4.</td> 
// <td>GED 3104 </td>
// <td>Data Mining and Data Warehousing</td>
// <td>Module1</td>
// <td><a href="/media/Btech/CSE/semester5/GED 3104-Data Mining And Data Warehousing/module1/mod1.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="/media/Btech/CSE/semester5/GED 3104-Data Mining And Data Warehousing/module2/mod2.pdf" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="/media/Btech/CSE/semester5/GED 3104-Data Mining And Data Warehousing/module3/mod3.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="/media/Btech/CSE/semester5/GED 3104-Data Mining And Data Warehousing/module4/mod4.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="/media/Btech/CSE/semester5/GED 3104-Data Mining And Data Warehousing/module5/mod5.pdf" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>5.</td> 
// <td></td>
// <td>Elective Courses</td>
// <td></td>
// <td></td>
// </tr>
// <tr>
// <td></td>
// <td>CSDX 113</td>
// <td> Essentials of Data Science </td>
// <td>Module 1</td>
// <td><a href="/media/Btech/CSE/semester5/Elective Courses/CSDX 113-Essentials Of Data Science/module1/mod1.pdf" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="/media/Btech/CSE/semester5/Elective Courses/CSDX 113-Essentials Of Data Science/module2/mod2.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="/media/Btech/CSE/semester5/Elective Courses/CSDX 113-Essentials Of Data Science/module3/mod3.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="/media/Btech/CSE/semester5/Elective Courses/CSDX 113-Essentials Of Data Science/module4/mod4.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="/media/Btech/CSE/semester5/Elective Courses/CSDX 113-Essentials Of Data Science/module5/mod5.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td>CSDX 108</td>
// <td> Computer Vision </td>
// <td>module 1</td>
// <td><a href="/media/Btech/CSE/semester5/Elective Courses/CSDX 108-Computer Vision/module1/mod1.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="/media/Btech/CSE/semester5/Elective Courses/CSDX 108-Computer Vision/module2/mod2.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="/media/Btech/CSE/semester5/Elective Courses/CSDX 108-Computer Vision/module3/mod3.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="/media/Btech/CSE/semester5/Elective Courses/CSDX 108-Computer Vision/module4/mod4.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="/media/Btech/CSE/semester5/Elective Courses/CSDX 108-Computer Vision/module5/mod5.pdf" target="_blank">click here</a></td>
// </tr>

// <tr>
// <td></td>
// <td>CSDX 103</td>
// <td> Cyber Laws And Ethics </td>
// <td>module 1</td>
// <td><a href="/media/Btech/CSE/semester5/Elective Courses/CSDX 103-Cyber Laws And Ethics/module1/mod1.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="/media/Btech/CSE/semester5/Elective Courses/CSDX 103-Cyber Laws And Ethics/module2/mod2.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="/media/Btech/CSE/semester5/Elective Courses/CSDX 103-Cyber Laws And Ethics/module3/mod3.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="/media/Btech/CSE/semester5/Elective Courses/CSDX 103-Cyber Laws And Ethics/module4/mod4.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="/media/Btech/CSE/semester5/Elective Courses/CSDX 103-Cyber Laws And Ethics/module5/mod5.pdf" target="_blank">click here</a></td>
// </tr>


// <td></td>
// <td>CSDX 102</td>
// <td>Distributed Computing</td>
// <td>module 1</td>
// <td><a href="/media/Btech/CSE/semester5/Elective Courses/CSDX 102-Distributed Computing/module1/mod1.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="/media/Btech/CSE/semester5/Elective Courses/CSDX 102-Distributed Computing/module2/mod2.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="/media/Btech/CSE/semester5/Elective Courses/CSDX 102-Distributed Computing/module3/mod3.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="/media/Btech/CSE/semester5/Elective Courses/CSDX 102-Distributed Computing/module4/mod4.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="/media/Btech/CSE/semester5/Elective Courses/CSDX 102-Distributed Computing/module5/mod5.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td>CSDX 111</td>
// <td>Foundation On Robotics</td>
// <td>module 1</td>
// <td><a href="/media/Btech/CSE/semester5/Elective Courses/CSDX 111-Foundation On Robotics/module1/mod1.pdf" target="_blank">click here</a></td> 
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="/media/Btech/CSE/semester5/Elective Courses/CSDX 111-Foundation On Robotics/module2/mod2.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="/media/Btech/CSE/semester5/Elective Courses/CSDX 111-Foundation On Robotics/module3/mod3.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="/media/Btech/CSE/semester5/Elective Courses/CSDX 111-Foundation On Robotics/module4/mod4.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="/media/Btech/CSE/semester5/Elective Courses/CSDX 111-Foundation On Robotics/module5/mod5.pdf" target="_blank">click here</a></td>
// </tr>
// <td></td>
// <td>CSDX 106</td>
// <td>Open Source Technologies</td>
// <td>module 1</td>
// <td><a href="/media/Btech/CSE/semester5/Elective Courses/CSDX 106-Open Source Technologies/module1/mod1.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="/media/Btech/CSE/semester5/Elective Courses/CSDX 106-Open Source Technologies/module2/mod2.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="/media/Btech/CSE/semester5/Elective Courses/CSDX 106-Open Source Technologies/module3/mod3.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="/media/Btech/CSE/semester5/Elective Courses/CSDX 106-Open Source Technologies/module4/mod4.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="/media/Btech/CSE/semester5/Elective Courses/CSDX 106-Open Source Technologies/module5/mod5.pdf" target="_blank">click here</a></td>
// </tr>

// <tr>
// <td></td>
// <td>CSDX 105</td>
// <td>XML and Web Services </td>
// <td>module 1</td>
// <td><a href="/media/Btech/CSE/semester5/Elective Courses/CSDX 105-XML And Web Services/module1/mod1.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 1</td>
// <td><a href="/media/Btech/CSE/semester5/Elective Courses/CSDX 105-XML And Web Services/module2/mod2.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="/media/Btech/CSE/semester5/Elective Courses/CSDX 105-XML And Web Services/module3/mod3.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="/media/Btech/CSE/semester5/Elective Courses/CSDX 105-XML And Web Services/module3/mod3.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="/media/Btech/CSE/semester5/Elective Courses/CSDX 105-XML And Web Services/module4/mod4.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="/media/Btech/CSE/semester5/Elective Courses/CSDX 105-XML And Web Services/module5/mod5.pdf" target="_blank">click here</a></td>
// </tr>


// <tr bgcolor="lightgrey">
// <td>6.</td>
// <td></td>
// <td>Internship</td>
// <td>project</td>
// <td><a href="/media/Btech/CSE/semester5/internship/project.pdf" target="_blank">click here</a></td>
// </tr>

// <tr bgcolor="lightgrey">
// <td>7.</td> 
// <td>CSD 3106</td>
// <td>Artificial Intelligence and Machine Learning Laboratory</td>
// <td>Lab</td>
// <td><a href="/media/Btech/CSE/semester5/CSD 3106-Artificial Intelligence And Machine Learning Laboratory/lab/lab.pdf" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>8.</td> 
// <td>CSD 3105</td>
// <td>Internet and Web programming Laboratory</td>
// <td>Lab</td>
// <td><a href="/media/Btech/CSE/semester5/CSD 3105-Internet And Web Programming Laboratory/lab/lab.pdf" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>9.</td>
// <td>CSD 3101</td> 
// <td>Communication Skills for Career Success</td>
// <td>Module1</td>
// <td><a href="/media/Btech/CSE/semester5/CSD 3101-Communication Skills For Career Success/module1/mod1.pdf" target="_blank">click here</a></td>
// </tr>
 
// </table>        
         
          
          
//       `;
//   }  else if (branch === 'B tech' && department === 'cse' && semester === 'semester6') {
      
//       noteResult.innerHTML = `
//           <h2> B tech-Computer Science engineering - Semester 6 Notes</h2>
//            <table>
// <tr bgcolor="black">
// <th>s.no</th>
// <th width= 10% ">Course code</th>
// <th width="50%">Course name</th>
// <th width= "15% ">Module</th>
// <th width= "15%" >PDF Link</th> 
// </tr>
// <tr bgcolor="lightgrey">
// <td>1.</td> 
// <td>MSD 3281 </td>
// <td>Entrepreneurship </td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr bgcolor="lightgrey">

//   <td>2.</td>
//    <td></td>
//   <td>Humanities Elective II</td>
//   <td>Modules</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr bgcolor="lightgrey">

//   <td>3.</td>
//    <td></td>
//   <td>Open Elective I</td>
//   <td>Modules</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>4.</td> 
// <td>CSD 3201 </td>
// <td>Big Data and Cloud Computing</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>5.</td>
// <td>CSD 3202</td> 
// <td>Compiler Design</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>6.</td> 
// <td>GED 3201</td>
// <td>Reasoning and Aptitude for Engineers</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr bgcolor="lightgrey">

//   <td>7.</td>
//    <td></td>
//   <td>Professional Elective </td>
//   <td>Modules</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr bgcolor="lightgrey">
// <td>8.</td> 
// <td>CSD 3203</td>
// <td>Compiler Laboratory</td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>9.</td> 
// <td>CSD 3204</td>
// <td>Mobile Application Development Laboratory</td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// </table> 
             
           
             
//              `;
//   }   else if (branch === 'B tech' && department === 'cse' && semester === 'semester7') {
      
//       noteResult.innerHTML = `
//           <h2> B tech-Computer Science engineering- Semester 7 Notes</h2>
             
        
//        <table>
// <tr bgcolor="black">
// <th>s.no</th>
// <th width= 10% ">Course code</th>
// <th width="50%">Course name</th>
// <th width= "15% ">Module</th>
// <th width= "15%" >PDF Link</th> 
// </tr>

// <tr bgcolor="lightgrey">

// <td>1.</td>
// <td></td>
// <td>General Elective</td>
// <td></td>
// <td></td>
// </tr>
// <tr>
// <td></td> 
// <td> GECX 209</td>
// <td>Usability Engineering</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr bgcolor="lightgrey">

// <td>2.</td>
// <td></td>
// <td>open Elective</td>
// <td></td>
// <td></td>
// </tr>
// <tr>       
// <td></td>
  

//    <td>GECX 201</td>
//   <td>Green Design and Sustainability</td>
//   <td>Module 1</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
//  <td></td>
//  <td></td>
//  <td></td>
//   <td>Module 2</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 3</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 4</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr> 
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 5</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr  >
// <td></td> 
// <td>GECX 205</td>
// <td>Industrial Safety</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr  >
// <td></td> 
// <td>GECX 216</td>
// <td>Principles of Communication Systems</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td>GECX 219</td> 
// <td>Advanced Entrepreneurship</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td> 
// <td>GECX 220</td>
// <td>Electric Vehicles</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>3.</td>
// <td>CSC 4151</td>
// <td>Software Project Management Techniques</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>4.</td>
// <td>CSC 4102</td>
// <td>Compiler Design</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>5.</td>
// <td>CSC 4103</td>
// <td>Cloud computing</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>


// <tr bgcolor="lightgrey">
// <td>6.</td> 
// <td>CSC 4104</td>
// <td>Compiler Laboratory</td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr bgcolor="lightgrey">
// <td>7.</td>
// <td></td>
// <td>Elective</td>
// <td></td>
// <td></td>
// </tr>
// <tr>
// <td></td>
// <td>CSCX 144</td>
// <td>Intrusion Detection and Prevention</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td>CSCX 149</td>
// <td>Animation with protfolio Developement</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td>CSCX 151</td>
// <td>Advanced programming in Data Science with python</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td>CSCX 155</td>
// <td>Security issues in cloud computing </td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td>CSCX 161</td>
// <td>Full Stack Mobile application developement I(front end) </td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td>CSCX 171</td>
// <td>Web Analytics and Social Media Mining</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td>CSCX 173</td>
// <td>Full Stack Mobile application developement I(Back end) </td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td>CSCX 174</td>
// <td>5G Wireless Communication Techniques</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// </table>        
           
//       `;
//   }  else if (branch === 'B tech' && department === 'cse' && semester === 'semester8') {
      
//       noteResult.innerHTML = `
//           <h2>B tech-Computer Science engineering- Semester 8 Notes</h2>
//            <h2> project work<h2>
// <table>
// <tr  bgcolor="black">
// <th>s.no</th>
// <th width= 10 % ">Course code</th>
// <th width="50%">Course name</th>
// <th width= "15% ">Module</th>
// <th width= "15%" >PDF Link</th>

// </tr>
// <tr  bgcolor="lightgrey"  >
// <td>1.</td>
// <td></td>
// <td>project</td>
// <td></td>

// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// </table>
//       `;
//   } else if (branch === 'B tech' && department === 'cse(cs)' && semester === 'semester1') {
      
//       noteResult.innerHTML = `
//           <h2>B tech-Computer Science engineering(cyber security)- Semester 1 Notes</h2>
//              <div class="table-container">        
// <table>
// <tr bgcolor="black">
// <th>s.no</th>
// <th width= 10 % ">Course code</th>
// <th width="50%">Course name</th>
// <th width= "15% ">Module</th>
// <th width= "15%" >PDF Link</th>

// </tr>
// <tr bgcolor="lightgrey">
// <td>1.</td>
// <td>PHD 1182</td>
// <td>Engineering Physics</td>
// <td>Module 1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td> </td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr bgcolor="lightgrey">     
//   <td>2.</td>
//   <td>CHD 1182</td>
//   <td>Chemistry for Electrical and Electronic Engineering</td>
//   <td>Module 1</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
//  <td></td>
// <td></td>
//  <td></td>
//   <td>Module 2</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
//   <td></td>
//   <td></td>
//   <td></td>
//   <td>Module 3</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
//   <td></td>
//   <td></td>
//   <td></td>
//   <td>Module 4</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr> 
//   <td></td>
//  <td></td>
//   <td></td>
//   <td>Module 5</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>3.</td> 
// <td>MAD 1181</td>       
// <td>Algebra and Differential Calculus</td>
// <td>Module 1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td> </td>
// <td></td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>4.</td> 
// <td>GED 1101</td> 
// <td>  Engineering Graphics</td>
// <td>Module 1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td> </td>
// <td></td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>5.</td> 
// <td>GED 1102</td>
// <td>Engineering Design</td>
// <td>Module 1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td> </td>
// <td></td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr bgcolor="lightgrey">    
// <td>6.</td> 
// <td>GED 1103 </td
// <tr>
// <td> manufactoring laboratoty practice </td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <td></td> 
// <td></td
// <tr>
// <td> ECE lab </td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <td></td> 
// <td></td
// <tr>
// <td> EEE lab </td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>7.</td> 
// <td>GED 1104</td> 
// <td>  programming for problem solving </td>
// <td>Module 1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td> </td>
// <td></td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// </tr>
// <tr bgcolor="lightgrey">
// <td>8.</td> 
// <td>GED 1104</td> 
// <td>  programming for problem solving lab </td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// </table>
//       `;
//   }  else if (branch === 'B tech' && department === 'cse(cs)' && semester === 'semester2') {
      
//       noteResult.innerHTML = `
//           <h2>B tech-Computer Science engineering(cyber security)- Semester 2 Notes</h2>

//             <table>
// <tr bgcolor="black">
// <th>s.no</th>
// <th width= 10% ">Course code</th>
// <th width="50%">Course name</th>
// <th width= "15% ">Module</th>
// <th width= "15%" >PDF Link</th> 
// </tr>
// <tr bgcolor="lightgrey">
// <td>1.</td> 
// <td>PHDX 05</td>
// <td>semiconductor physics for information technology</td>
// <td>Module1</td>
// <td><a href="https://drive.google.com/file/d/1vZcDfDC21o-8_O5pwLb0OlQKasR8viue/view?usp=drivesdk" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="https://drive.google.com/file/d/1vggx5OpyLrBH6iz-f3zCNKbhbJmrQ3JV/view?usp=drivesdk" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr bgcolor="lightgrey">

//   <td>2.</td>
//    <td>CHDX 04</td>
//   <td>functional material and application </td>
//   <td>Module 1</td>
//   <td><a href="https://drive.google.com/file/d/1v9wo9vOCMFsFs94UKhIeldvx6M4gXRmr/view?usp=drivesdk" target="_blank">click here</a></td>
// </tr>
// <tr>
//  <td></td>
//  <td></td>
//  <td></td>
//   <td>Module 2</td>
//   <td><a href="https://drive.google.com/file/d/1vMzi6gL8bPfzkYUBSumXERGW6fmw3Hnm/view?usp=drivesdk" target="_blank">click here</a></td>
// </tr>
// <tr>
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 3</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 4</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr> 
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 5</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>3.</td> 
// <td>MAD 1285 </td>
// <td>Advanced calculus</td>
// <td>Module1</td>
// <td><a href="https://drive.google.com/file/d/173hWWyE1ZLnwW0TKEKgeNjtiksEQkDzB/view?usp=drivesdk" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="https://drive.google.com/file/d/174tmVBQhygUspn7GbAX11gFl6pDG_I6b/view?usp=drivesdk" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="https://drive.google.com/file/d/175TSuOPg9OWm2RWNuzs4ux2ttE140uG3/view?usp=drivesdk" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="https://drive.google.com/file/d/17744hzDMjKo4xD_AhrqRjV6OsJ-jHq9f/view?usp=drivesdk" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="https://drive.google.com/file/d/17L0Iv_J_-2AQeJs-LSqq7w2hiIrg__d_/view?usp=drivesdk" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>4.</td>
// <td>GED 1202</td> 
// <td>Basic Electrical and electronics engineering</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>5.</td> 
// <td>GED 1201</td>
// <td>Engineering mechanics</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>6.</td>
// <td>END 1281</td>
// <td>English for engineers</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>7.</td>
// <td>GED 1206</td>
// <td>Environmental Science</td>
// <td>Module1</td>
// <td><a href="https://drive.google.com/file/d/1vhq0S1L7FgO4he9kl997-qnc3gPfykPK/view?usp=drivesdk" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="https://drive.google.com/file/d/1vj79r8-rxkMEvvrjeckrZcRLvpJAr3aH/view?usp=drivesdk" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>8.</td>
// <td>CSD 1201</td>
// <td>Object oriented programming </td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>9.</td> 
// <td>GED 1202 </td>
// <td> B EEE lab</td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>10.</td> 
// <td>CSD 1201</td>
// <td>Object oriented programming lab</td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// </table>
               
//       `;
//   }  else if (branch === 'B tech' && department === 'cse(cs)' && semester === 'semester3') {
      
//       noteResult.innerHTML = `
//           <h2>B tech-Computer Science engineering(cyber security)- Semester 3 Notes</h2>
// <table >
// <tr bgcolor="black">
// <th>s.no</th>
// <th width= 10% ">Course code</th>
// <th width="50%">Course name</th>
// <th width= "10% ">Module</th>
// <th width= "10%" >PDF Link</th>
// </tr>
// <tr bgcolor="lightgrey">
// <td>1</td>
// <td></td>
// <td>Human elective</td>
// <td></td>
// <td></td>
// </tr>
// <tr>
// <td></td>
// <td>SSDX 01</td>
// <td>engineering economics and management</td>
// <td>Module 1</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 2</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td>SSDX 02</td>
// <td>Sociology of Science and Technology</td>
// <td>Module 1</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 2</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr> 
// <tr>
// <td></td>
// <td>SSDX 03</td>
// <td>Industrial Economics and Management</td>
// <td>Module 1</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 2</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr> 
// <tr>
// <td></td>
// <td>SSDX 04</td>
// <td>Dynamics of Indian Social Structure</td>
// <td>Module 1</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 2</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr> 

// <tr bgcolor="lightgrey">
// <td>2.</td>
// <td>MAD 2182</td>
// <td>Probability and Statistics</td>
// <td>Module 1</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 2</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr> 
// <tr bgcolor="lightgrey" >
// <td>3</td>
// <td>CSD 2101</td>
// <td>Python Programming</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey" >
// <td>4</td>
// <td>CSD 2103</td>
// <td>Data Structure</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>5</td>
// <td>CSD 2102</td>
// <td>digital system</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>6</td>
// <td>CSD 2104</td>
// <td>Software Engineering</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr bgcolor="lightgrey">
// <td>7</td>
// <td>GED 2101</td>
// <td>Essential Skills and Aptitude for Engineers</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>8</td>
// <td>CSD 2105</td>
// <td> Python Programming Laboratory </td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>  
// <tr bgcolor="lightgrey">
// <td>9</td>
// <td>CSD 2106</td>
// <td>Data Structures Laboratory</td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr> 
// </table>
              
//       `;
//   }  else if (branch === 'B tech' && department === 'cse(cs)' && semester === 'semester4') {
      
//       noteResult.innerHTML = `
//          <h2>B tech-Computer Science engineering(cyber security)- Semester 4 Notes</h2>
//            <table>
// <tr bgcolor="black">
// <th>s.no</th>
// <th width= 10% ">Course code</th>
// <th width="50%">Course name</th>
// <th width= "15% ">Module</th>
// <th width= "15%" >PDF Link</th>       
// </tr>
// <tr bgcolor="lightgrey">
// <td>1.</td> 
// <td>CSD 2202</td>
// <td>Analysis of Algorithm</td>
// <td>Module1</td>
// <td><a href="https://drive.google.com/file/d/1mUzYE286uowSqLp83mbxJcPdvoQgOLZQ/view?usp=drivesdk" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="https://drive.google.com/file/d/1mfiU2nAMTWGOui3bm-fxB-RxNMdwwCZZ/view?usp=drivesdk" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>

// <tr bgcolor="lightgrey">

//   <td>2.</td>
//    <td>CSD 2231</td>
//   <td>Computer and Information Security Fundamentals </td>
//   <td>Module 1</td>
//   <td><a href="https://docs.google.com/document/d/1d-BwH6h3rkgb0tw-jf91gneBKm4szFn6/edit?usp=drive_link&ouid=102880704366490215577&rtpof=true&sd=true" target="_blank">click here</a></td>

// </tr>
// <tr>
//  <td></td>
//  <td></td>
//  <td></td>
//   <td>Module 2</td>
//   <td><a href="https://drive.google.com/file/d/1dDDd5QO9q3XyJAhLtSibS-yTvnA_eARg/view?usp=drivesdk" target="_blank">click here</a></td>

// </tr>
// <tr>
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 3</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 4</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr> 
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 5</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr bgcolor="lightgrey">
// <td>3.</td> 
// <td>CSD 2201  </td>
// <td>Computer Communication and Networks</td>
// <td>Module1</td>
// <td><a href="https://docs.google.com/presentation/d/1fB9gGMLwLABxGnOVKKU-Nm9dOztGXW-A/edit?usp=drive_link&ouid=102880704366490215577&rtpof=true&sd=true" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="https://docs.google.com/presentation/d/1fBOU-Kjw3dK9--8ybpQM2Jp8uFfM5Tbl/edit?usp=drive_link&ouid=102880704366490215577&rtpof=true&sd=true" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="https://drive.google.com/file/d/16LliTBRKWQ_YD1puGRRACG7sNtr_nBGB/view?usp=drivesdk" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="https://drive.google.com/file/d/16Pw7RsmlGDiwDR9nW8yS8DANPqAYaT7x/view?usp=drivesdk" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr bgcolor="lightgrey">
// <td>4.</td>
// <td>CSD 2205</td> 
// <td>Database Management Systems</td>
// <td>Module1</td>
// <td><a href="https://drive.google.com/file/d/1bwqGeNRcD9BVfqhRkbvBlAZmMlTO--iK/view?usp=drive_link" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="https://drive.google.com/file/d/1rxrvsUOiW4abpC39vZoaBKJhB3HHAGAS/view?usp=drivesdk" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr bgcolor="lightgrey">
// <td>5.</td> 
// <td>CSD 2204</td>
// <td>Operating Systems</td>
// <td>Module1</td>
// <td><a href="https://drive.google.com/file/d/1alwZzSkCxarIvJCu55y6s6Rb5UbCUKvb/view?usp=drivesdk" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="https://drive.google.com/file/d/1azCMG59PemMifjwPLDyIJ8fRUd5bubES/view?usp=drivesdk" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="https://docs.google.com/presentation/d/1hSHYez61_WC2wiFyOw8tB-R7wu-b5rNA/edit?usp=drivesdk&ouid=107286053246224902318&rtpof=true&sd=true" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr bgcolor="lightgrey">
// <td>6.</td>
// <td>GED 2201</td>
// <td>Workplace Skills and Aptitude for Engineers</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr bgcolor="lightgrey">
// <td>7.</td>
// <td>GED 2202</td>
// <td>Indian Constitution and Human Rights</td>
// <td>Module1</td>
// <td><a href="https://drive.google.com/file/d/1g9hPSxqDioltpv0U5XOkT41YcUgOSlOl/view?usp=drive_link" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="https://drive.google.com/file/d/1gLic-XgF4vcbA_ZI0venzyt-vPrq5WWk/view?usp=drive_link" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="https://docs.google.com/document/d/1zMAMfuowkFKQLrgtboi2L2lSvXX2QFX5/edit?usp=drivesdk&ouid=107286053246224902318&rtpof=true&sd=true" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr bgcolor="lightgrey">
// <td>8.</td>
// <td>PEC</td>
// <td>Professional Elective Courses</td>
// <td></td>

// </tr>
// <tr>
// <td></td>
// <td>CSDX206</td>
// <td>Fundementals of Computer Forensics</td>
// <td>Module1</td>
// <td><a href="https://drive.google.com/file/d/1ciCRRV1ZvI7Owj-Lohxa7VLzkeBhEX9p/view?usp=drivesdk" target="_blank">click here</a></td>


// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="https://drive.google.com/file/d/1suolbIaOh2nSO-7Zdo5_x2BP1NZh-Lq_/view?usp=drivesdk" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>

// <tr bgcolor="lightgrey">
// <td>9.</td> 
// <td>CSD 2232</td>
// <td>Information Security  Laboratory</td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr bgcolor="lightgrey">
// <td>10.</td> 
// <td>CSD 2207</td>
// <td>Database Management Systems Laboratory</td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// </table> 
            
//       `;
//   }  else if (branch === 'B tech' && department === 'cse(cs)' && semester === 'semester5') {
      
//       noteResult.innerHTML = `
//           <h2>B tech-Computer Science engineering(cyber security)- Semester 5 Notes</h2>
//        <table>
// <tr bgcolor="black">
// <th>s.no</th>
// <th width= 10% ">Course code</th>
// <th width="50%">Course name</th>
// <th width= "15% ">Module</th>
// <th width= "15%" >PDF Link</th> 
// </tr>
// <tr bgcolor="lightgrey">
// <td>1.</td> 
// <td>CSD 3101</td>
// <td>Theory of Computation</td>
// <td>Module1</td>
// <td><a href="/media/Btech/CSE(CS)/semester5/CSD 3101-Theory Of Computation/module1/mod1.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="/media/Btech/CSE(CS)/semester5/CSD 3101-Theory Of Computation/module2/mod2.pdf" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="/media/Btech/CSE(CS)/semester5/CSD 3101-Theory Of Computation/module3/mod3.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="/media/Btech/CSE(CS)/semester5/CSD 3101-Theory Of Computation/module4/mod4.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="/media/Btech/CSE(CS)/semester5/CSD 3101-Theory Of Computation/module5/mod5.pdf" target="_blank">click here</a></td>
// </tr>

// <tr bgcolor="lightgrey">

//   <td>2.</td>
//    <td>CSD 3102</td>
//   <td>Artificial Intelligence Techniques</td>
//   <td>Module 1</td>
//   <td><a href="/media/Btech/CSE(CS)/semester5/CSD 3102-Artificial Intelligence Techniques/module1/mod1.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
//  <td></td>
//  <td></td>
//  <td></td>
//   <td>Module 2</td>
//   <td><a href="/media/Btech/CSE(CS)/semester5/CSD 3102-Artificial Intelligence Techniques/module2/mod2.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 3</td>
//   <td><a href="/media/Btech/CSE(CS)/semester5/CSD 3102-Artificial Intelligence Techniques/module3/mod3.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 4</td>
//   <td><a href="/media/Btech/CSE(CS)/semester5/CSD 3102-Artificial Intelligence Techniques/module4/mod4.pdf" target="_blank">click here</a></td>
// </tr>
// <tr> 
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 5</td>
//   <td><a href="/media/Btech/CSE(CS)/semester5/CSD 3102-Artificial Intelligence Techniques/module5/mod5.pdf" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>3.</td> 
// <td>CSD 3104 </td>
// <td> Data Mining And Data Warehousing</td>
// <td>Module1</td>
// <td><a href="/media/Btech/CSE(CS)/semester5/GED 3104-Data Mining And Data Warehousing/module1/mod1.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="/media/Btech/CSE(CS)/semester5/GED 3104-Data Mining And Data Warehousing/module2/mod2.pdf" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="/media/Btech/CSE(CS)/semester5/GED 3104-Data Mining And Data Warehousing/module3/mod3.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="/media/Btech/CSE(CS)/semester5/GED 3104-Data Mining And Data Warehousing/module4/mod4.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="/media/Btech/CSE(CS)/semester5/GED 3104-Data Mining And Data Warehousing/module5/mod5.pdf" target="_blank">click here</a></td>
// </tr>

// <tr bgcolor="lightgrey">
// <td>4.</td>
// <td>CSD 3131</td> 
// <td> Web And Mobile Application Security</td>
// <td>Module1</td>
// <td><a href="/media/Btech/CSE(CS)/semester5/CSD 3133-Web And Mobile Application Security/module1/mod1.pdf" target="_blank">click here</a></td> 
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="/media/Btech/CSE(CS)/semester5/CSD 3133-Web And Mobile Application Security/module2/mod2.pdf" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>Module 3</td>
// <td><a href="/media/Btech/CSE(CS)/semester5/CSD 3133-Web And Mobile Application Security/module3/mod3.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="/media/Btech/CSE(CS)/semester5/CSD 3133-Web And Mobile Application Security/module4/mod4.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="/media/Btech/CSE(CS)/semester5/CSD 3133-Web And Mobile Application Security/module5/mod5.pdf" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>5.</td> 
// <td></td>
// <td>Elective Courses</td>
// <td></td>
// <td></td>
// </tr>
  
// <tr>
// <td></td>
// <td>CSDX 108</td>
// <td> Computer Vision</td>
// <td>module 1</td>
// <td><a href="/media/Btech/CSE(CS)/semester5/Elective Courses/CSDX 108-Computer Vision/module1/mod1.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="/media/Btech/CSE(CS)/semester5/Elective Courses/CSDX 108-Computer Vision/module2/mod2.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="/media/Btech/CSE(CS)/semester5/Elective Courses/CSDX 108-Computer Vision/module3/mod3.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="/media/Btech/CSE(CS)/semester5/Elective Courses/CSDX 108-Computer Vision/module4/mod4.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="/media/Btech/CSE(CS)/semester5/Elective Courses/CSDX 108-Computer Vision/module5/mod5.pdf" target="_blank">click here</a></td>
// </tr>

// <tr>
// <td></td>
// <td>CSDX 111</td>
// <td>Foundation On Robotics</td>
// <td>module 1</td>
// <td><a href="/media/Btech/CSE(CS)/semester5/Elective Courses/CSDX 111-Foundation On Robotics/module1/mod1.pdf" target="_blank">click here</a></td>
// </tr>

// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="/media/Btech/CSE(CS)/semester5/Elective Courses/CSDX 111-Foundation On Robotics/module2/mod2.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="/media/Btech/CSE(CS)/semester5/Elective Courses/CSDX 111-Foundation On Robotics/module3/mod3.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="/media/Btech/CSE(CS)/semester5/Elective Courses/CSDX 111-Foundation On Robotics/module4/mod4.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="/media/Btech/CSE(CS)/semester5/Elective Courses/CSDX 111-Foundation On Robotics/module5/mod5.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td>CSDX 113</td>
// <td> Essentials of Data Science</td>
// <td>module 1</td>
// <td><a href="/media/Btech/CSE(CS)/semester5/Elective Courses/CSDX 113-Essentials Of Data Science/module1/mod1.pdf" target="_blank">click here</a></td>
// </tr>

// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="" target="_bl/media/Btech/CSE(CS)/semester5/Elective Courses/CSDX 113-Essentials Of Data Science/module2/mod2.pdf target="_blank"">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="/media/Btech/CSE(CS)/semester5/Elective Courses/CSDX 113-Essentials Of Data Science/module3/mod3.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="/media/Btech/CSE(CS)/semester5/Elective Courses/CSDX 113-Essentials Of Data Science/module4/mod4.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="/media/Btech/CSE(CS)/semester5/Elective Courses/CSDX 113-Essentials Of Data Science/module5/mod5.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td>CSDX 304</td>
// <td> IT Security Engineering</td>
// <td>module 1</td>
// <td><a href="/media/Btech/CSE(CS)/semester5/Elective Courses/CSDX 304-IT Security Engineering/module1/mod1.pdf" target="_blank">click here</a></td>
// </tr>

// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="/media/Btech/CSE(CS)/semester5/Elective Courses/CSDX 304-IT Security Engineering/module2/mod2.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="/media/Btech/CSE(CS)/semester5/Elective Courses/CSDX 304-IT Security Engineering/module3/mod3.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="/media/Btech/CSE(CS)/semester5/Elective Courses/CSDX 304-IT Security Engineering/module4/mod4.pdf" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="/media/Btech/CSE(CS)/semester5/Elective Courses/CSDX 304-IT Security Engineering/module5/mod5.pdf" target="_blank">click here</a></td>
// </tr>
 

// <tr bgcolor="lightgrey">
// <td>6.</td> 
// <td>CSD 3106</td>
// <td>Artificial Intelligence and Machine Learning Laboratory</td>
// <td>Lab</td>
// <td><a href="/media/Btech/CSE(CS)/semester5/CSD 3106-Artificial Intelligence And Machine Learning Laboratory/lab/lab.pdf" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>7.</td> 
// <td>CSD 3105</td>
// <td>Internet and Web programming Laboratory</td>
// <td>Lab</td>
// <td><a href="/media/Btech/CSE(CS)/semester5/CSD 3105-Internet And Web Programming Laboratory/lab/lab.pdf" target="_blank">click here</a></td>
// </tr>


 

// <tr bgcolor="lightgrey">
// <td>8</td>
// <td>GED 3101</td>
// <td>Communication Skills for Career Success</td>
// <td>module 1</td>
// <td><a href="/media/Btech/CSE(CS)/semester5/CSD 3101-Communication Skills For Career Success/module1" target="_blank">click here</a></td>
// </tr>
 
 
// <tr bgcolor="lightgrey">
// <td>9.</td>
// <td></td>
// <td>Internship</td>
// <td>project</td>
// <td><a href="/media/Btech/CSE(CS)/semester5/internship/project.pdf" target="_blank">click here</a></td>
// </tr>
// </table>         

            
//       `;
//   }  else if (branch === 'B tech' && department === 'cse(cs)' && semester === 'semester6') {
      
//       noteResult.innerHTML = `
//           <h2>B tech-Computer Science engineering(cyber security)- Semester 6 Notes</h2>
//          <table>
// <tr bgcolor="black">
// <th>s.no</th>
// <th width= 10% ">Course code</th>
// <th width="50%">Course name</th>
// <th width= "15% ">Module</th>
// <th width= "15%" >PDF Link</th> 
// </tr>
// <tr bgcolor="lightgrey">
// <td>1.</td> 
// <td>MSD 3281 </td>
// <td>Entrepreneurship </td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr bgcolor="lightgrey">

//   <td>2.</td>
//    <td></td>
//   <td>Humanities Elective II</td>
//   <td>Modules</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr bgcolor="lightgrey">

//   <td>3.</td>
//    <td></td>
//   <td>Open Elective I</td>
//   <td>Modules</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">

// <tr bgcolor="lightgrey">
// <td>4.</td>
// <td>CSD 3202</td> 
// <td>Compiler Design</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>5.</td> 
// <td>GED 3201</td>
// <td>Reasoning and Aptitude for Engineers</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>6.</td>
// <td>CSD 3234</td>
// <td>Intrusion Detection and Internet Security </td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr bgcolor="lightgrey">
// <td>7.</td>
//    <td></td>
//   <td>professional elective course</td>
//   <td>Modules</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>8.</td> 
// <td>CSD 3203</td>
// <td>Compiler Laboratory</td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>9.</td> 
// <td>CSD 3234</td>
// <td>Intrusion Detection and Internet Security Laboratory</td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// </table>    

//       `;
//   }  else if (branch === 'B tech' && department === 'cse(cs)' && semester === 'semester7') {
      
//       noteResult.innerHTML = `
//           <h2>B tech-Computer Science engineering(cyber security)- Semester 7 Notes</h2>
          
        
//        <table>
// <tr bgcolor="black">
// <th>s.no</th>
// <th width= 10% ">Course code</th>
// <th width="50%">Course name</th>
// <th width= "15% ">Module</th>
// <th width= "15%" >PDF Link</th> 
// </tr>

// <tr bgcolor="lightgrey">

// <td>1.</td>
// <td></td>
// <td>open Elective</td>
// <td></td>
// <td></td>
// </tr>
// <tr>
// <td></td> 
// <td> GECX 209</td>
// <td>Usability Engineering</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td> 
// <td> GECX 205</td>
// <td>Industrial Safety</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

//   <td></td>
//    <td>GECX 201</td>
//   <td>Green Design and Sustainability</td>
//   <td>Module 1</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
//  <td></td>
//  <td></td>
//  <td></td>
//   <td>Module 2</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 3</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 4</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr> 
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 5</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr  >
// <td></td> 
// <td>GECX 216</td>
// <td>Principles of Communication Systems</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td>GECX 219</td> 
// <td>Advanced Entrepreneurship</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td> 
// <td>GECX 220</td>
// <td>Electric Vehicles</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>2.</td>
// <td>CSC 4102</td>
// <td>compiler design</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>3.</td>
// <td>CSC 4103</td>
// <td>cloud computing</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>4.</td>
// <td>CSC 4132</td>
// <td>Contingency Planning and Disaster Recovery</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// </tr>
// <tr bgcolor="lightgrey">
// <td>6.</td> 
// <td>CSD 1201</td>
// <td>Internship</td>
// <td>project</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>7.</td>
// <td></td>
// <td>elective</td>
// <td></td>
// <td></td>
// </tr>
// <tr>
// <td></td>
// <td>CSCX 149</td>
// <td>Animation with Portfolio Development (2L + 2P)</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td>CSCX 151</td>
// <td>Advanced Programming in Data Science with Python</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td>CSCX 335</td>
// <td>Security in smart devices</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td>CSD 171</td>
// <td>Web Analytics and Social Media mining</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td>CSD 173</td>
// <td>Full Stack Mobile Application Development II(Back End)</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td>CSD 174</td>
// <td>5G Wireless Communication Techniques</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// </table> 
            
//       `;
//   }  else if (branch === 'B tech' && department === 'cse(cs)' && semester === 'semester8') {
      
//       noteResult.innerHTML = `
//           <h2>B tech-Computer Science engineering (cyber security)- Semester 8 Notes</h2>
//                   <h2>project work</h2>
//  <table>
// <tr  bgcolor="black">
// <td>s.no</th>
// <th width= 10 % ">Course code</th>
// <th width="50%">Course name</th>
// <th width= "15% ">Module</th>
// <th width= "15%" >PDF Link</th>

// </tr>
// <tr  bgcolor="lightgrey"  >
// <td>1.</td>
// <td></td>
// <td>project</td>
// <td></td>

// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// </table>
             
//       `;
//   } else if (branch === 'B tech' && department === 'cse(Iot)' && semester === 'semester1') {
      
//       noteResult.innerHTML = `
//           <h2>B tech-Computer Science engineering(Internet of things)- Semester 1 Notes</h2>
//             <div class="table-container">        
// <table>
// <tr  bgcolor="black"><div class="tableclr">
// <th>s.no</th>
// <th width= 106 % ">Course code</th>
// <th width="50%">Course name</th>
// <th width= "15% ">Module</th>
// <th width= "15%" >PDF Link</th>
// </div>
// </tr>
// <tr  bgcolor="lightgrey">
// <td>1.</td>
// <td>PHD 1182</td>
// <td>Engineering Physics</td>
// <td>Module 1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td> </td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr  bgcolor="lightgrey">   
//   <td>2.</td>
//   <td>CHD 1182</td>
//   <td>Chemistry for Electrical and Electronic Engineering</td>
//   <td>Module 1</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
//  <td></td>
// <td></td>
//  <td></td>
//   <td>Module 2</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
//   <td></td>
//   <td></td>
//   <td></td>
//   <td>Module 3</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
//   <td></td>
//   <td></td>
//   <td></td>
//   <td>Module 4</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr> 
//   <td></td>
//  <td></td>
//   <td></td>
//   <td>Module 5</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr  bgcolor="lightgrey">
// <td>3.</td> 
// <td>MAD 1181</td>       
// <td>Algebra and Differential Calculus</td>
// <td>Module 1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td> </td>
// <td></td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr  bgcolor="lightgrey">
// <td>4.</td> 
// <td>GED 1101</td> 
// <td>  Engineering Graphics</td>
// <td>Module 1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td> </td>
// <td></td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey"> 
// <td>5.</td> 
// <td>GED 1102</td>
// <td>Engineering Design</td>
// <td>Module 1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td> </td>
// <td></td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr  bgcolor="lightgrey">   
// <td>6.</td> 
// <td>GED 1103 </td
// <tr>
// <td> manufactoring laboratoty practice </td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <td></td> 
// <td></td
// <tr>
// <td> ECE lab </td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <td></td> 
// <td></td
// <tr>
// <td> EEE lab </td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr  bgcolor="lightgrey">
// <td>7.</td> 
// <td>GED 1104</td> 
// <td>  programming for problem solving </td>
// <td>Module 1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td> </td>
// <td></td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr  bgcolor="lightgrey">
// <td>8.</td> 
// <td>GED 1104</td> 
// <td>  programming for problem solving lab </td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// </table>
//       `;
//   }  else if (branch === 'B tech' && department === 'cse(Iot)' && semester === 'semester2') {
      
//       noteResult.innerHTML = `
//           <h2>B tech-Computer Science(Iot)- Semester 2 Notes</h2>
//           <table>
// <tr bgcolor="black">
// <th>s.no</th>
// <th width= 10% ">Course code</th>
// <th width="50%">Course name</th>
// <th width= "15% ">Module</th>
// <th width= "15%" >PDF Link</th> 
// </tr>
// <tr bgcolor="lightgrey">
// <td>1.</td> 
// <td>PHDX 05</td>
// <td>semiconductor physics for information technology</td>
// <td>Module1</td>
// <td><a href="https://drive.google.com/file/d/1vZcDfDC21o-8_O5pwLb0OlQKasR8viue/view?usp=drivesdk" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="https://drive.google.com/file/d/1vggx5OpyLrBH6iz-f3zCNKbhbJmrQ3JV/view?usp=drivesdk" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr bgcolor="lightgrey">

//   <td>2.</td>
//    <td>CHDX 04</td>
//   <td>functional material and application </td>
//   <td>Module 1</td>
//   <td><a href="https://drive.google.com/file/d/1v9wo9vOCMFsFs94UKhIeldvx6M4gXRmr/view?usp=drivesdk" target="_blank">click here</a></td>
// </tr>
// <tr>
//  <td></td>
//  <td></td>
//  <td></td>
//   <td>Module 2</td>
//   <td><a href="https://drive.google.com/file/d/1vMzi6gL8bPfzkYUBSumXERGW6fmw3Hnm/view?usp=drivesdk" target="_blank">click here</a></td>
// </tr>
// <tr>
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 3</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 4</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr> 
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 5</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>3.</td> 
// <td>MAD 1286 </td>
// <td>linear algebra</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>4.</td>
// <td>GED 1202</td> 
// <td>Basic Electrical and electronics engineering</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>5.</td> 
// <td>GED 1201</td>
// <td>Engineering mechanics</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>6.</td>
// <td>END 1281</td>
// <td>English for engineers</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>7.</td>
// <td>GED 1206</td>
// <td>Environmental Science</td>
// <td>Module1</td>
// <td><a href="https://drive.google.com/file/d/1vhq0S1L7FgO4he9kl997-qnc3gPfykPK/view?usp=drivesdk" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="https://drive.google.com/file/d/1vj79r8-rxkMEvvrjeckrZcRLvpJAr3aH/view?usp=drivesdk" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>8.</td>
// <td>CSD 1201</td>
// <td>Object oriented programming </td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>9.</td> 
// <td>GED 1202 </td>
// <td> B EEE lab</td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>10.</td> 
// <td>CSD 1201</td>
// <td>Object oriented programming lab</td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// </table> 

               
//       `;
//   }  else if (branch === 'B tech' && department === 'cse(Iot)' && semester === 'semester3') {
      
//       noteResult.innerHTML = `
//           <h2>B tech-Computer Science engineering(Internet of things)- Semester 3 Notes</h2>
           
// <table >
// <tr bgcolor="black">
// <th>s.no</th>
// <th width= 10% ">Course code</th>
// <th width="50%">Course name</th>
// <th width= "10% ">Module</th>
// <th width= "10%" >PDF Link</th>
// </tr>
// <tr bgcolor="lightgrey">
// <td>1</td>
// <td></td>
// <td>Human elective</td>
// <td></td>
// <td></td>
// </tr>
// <tr>
// <td></td>
// <td>SSDX 01</td>
// <td>engineering economics and management</td>
// <td>Module 1</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 2</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td>SSDX 02</td>
// <td>Sociology of Science and Technology</td>
// <td>Module 1</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 2</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr> 
// <tr>
// <td></td>
// <td>SSDX 03</td>
// <td>Industrial Economics and Management</td>
// <td>Module 1</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 2</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr> 
// <tr>
// <td></td>
// <td>SSDX 04</td>
// <td>Dynamics of Indian Social Structure</td>
// <td>Module 1</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 2</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr> 

// <tr bgcolor="lightgrey">
// <td>2.</td>
// <td>MAD 2182</td>
// <td>Probability and Statistics</td>
// <td>Module 1</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 2</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr> 
// <tr bgcolor="lightgrey" >
// <td>3</td>
// <td>CSD 2101</td>
// <td>Python Programming</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey" >
// <td>4</td>
// <td>CSD 2103</td>
// <td>Data Structure</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr bgcolor="lightgrey">
// <td>5</td>
// <td>CSD 2102</td>
// <td>digital system</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>6</td>
// <td>CSD 2104</td>
// <td>Software Engineering</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr bgcolor="lightgrey">
// <td>7</td>
// <td>GED 2101</td>
// <td>Essential Skills and Aptitude for Engineers</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>8</td>
// <td>CSD 2105</td>
// <td> Python Programming Laboratory </td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>  
// <tr bgcolor="lightgrey">
// <td>9</td>
// <td>CSD 2106</td>
// <td>Data Structures Laboratory</td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr> 
// </table>
                  
//       `;
//   }  else if (branch === 'B tech' && department === 'cse(Iot)' && semester === 'semester4') {
      
//       noteResult.innerHTML = `
//          <h2>B tech-Computer Science engineering(Internet of things)- Semester 4 Notes</h2>
//           <table>
// <tr bgcolor="black">
// <th>s.no</th>
// <th width= 10% ">Course code</th>
// <th width="50%">Course name</th>
// <th width= "15% ">Module</th>
// <th width= "15%" >PDF Link</th> 
// </tr>
// <tr bgcolor="lightgrey">
// <td>1.</td> 
// <td>CSD 2202</td>
// <td>Analysis of Algorithm</td>
// <td>Module1</td>
// <td><a href="https://drive.google.com/file/d/1mUzYE286uowSqLp83mbxJcPdvoQgOLZQ/view?usp=drivesdk" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="https://drive.google.com/file/d/1mfiU2nAMTWGOui3bm-fxB-RxNMdwwCZZ/view?usp=drivesdk" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>

// <tr bgcolor="lightgrey">

//   <td>2.</td>
//    <td>CSD 2241</td>
//   <td>Microprocessor and Embedded System Design</td>
//   <td>Module 1</td>
//   <td><a href="https://drive.google.com/file/d/1py6qa-_xoZaQQLQZpOSu58zFiwa1A9Pl/view?usp=drivesdk" target="_blank">click here</a></td>

// </tr>
// <tr>
//  <td></td>
//  <td></td>
//  <td></td>
//   <td>Module 2</td>
//   <td><a href="https://drive.google.com/file/d/1pyOS7tjawx_A5tBrhSlJRqidQKcHHci3/view?usp=drivesdk" target="_blank">clic+k here</a></td>

// </tr>
// <tr>
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 3</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 4</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr> 
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 5</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr bgcolor="lightgrey">
// <td>3.</td> 
// <td>CSD 2201  </td>
// <td>Computer Communication and Networks</td>
// <td>Module1</td>
// <td><a href="https://docs.google.com/presentation/d/1fB9gGMLwLABxGnOVKKU-Nm9dOztGXW-A/edit?usp=drive_link&ouid=102880704366490215577&rtpof=true&sd=true" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="https://docs.google.com/presentation/d/1fBOU-Kjw3dK9--8ybpQM2Jp8uFfM5Tbl/edit?usp=drive_link&ouid=102880704366490215577&rtpof=true&sd=true" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="https://drive.google.com/file/d/16LliTBRKWQ_YD1puGRRACG7sNtr_nBGB/view?usp=drivesdk" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="https://drive.google.com/file/d/16Pw7RsmlGDiwDR9nW8yS8DANPqAYaT7x/view?usp=drivesdk" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr bgcolor="lightgrey">
// <td>4.</td>
// <td>CSD 2205</td> 
// <td>Database Management Systems</td>
// <td>Module1</td>
// <td><a href="https://drive.google.com/file/d/1bwqGeNRcD9BVfqhRkbvBlAZmMlTO--iK/view?usp=drive_link" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="https://drive.google.com/file/d/1rxrvsUOiW4abpC39vZoaBKJhB3HHAGAS/view?usp=drivesdk" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr bgcolor="lightgrey">
// <td>5.</td> 
// <td>CSD 2204</td>
// <td>Operating Systems</td>
// <td>Module1</td>
// <td><a href="https://drive.google.com/file/d/1alwZzSkCxarIvJCu55y6s6Rb5UbCUKvb/view?usp=drive_link" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="https://drive.google.com/file/d/1azCMG59PemMifjwPLDyIJ8fRUd5bubES/view?usp=drive_link" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="https://docs.google.com/presentation/d/1hSHYez61_WC2wiFyOw8tB-R7wu-b5rNA/edit?usp=drivesdk&ouid=107286053246224902318&rtpof=true&sd=true" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr bgcolor="lightgrey">
// <td>6.</td>
// <td>GED 2201</td>
// <td>Workplace Skills and Aptitude for Engineers</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr bgcolor="lightgrey">
// <td>7.</td>
// <td>GED 2202</td>
// <td>Indian Constitution and Human Rights</td>
// <td>Module1</td>
// <td><a href="https://drive.google.com/file/d/1g9hPSxqDioltpv0U5XOkT41YcUgOSlOl/view?usp=drive_link" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="https://drive.google.com/file/d/1gLic-XgF4vcbA_ZI0venzyt-vPrq5WWk/view?usp=drive_link" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="https://docs.google.com/document/d/1zMAMfuowkFKQLrgtboi2L2lSvXX2QFX5/edit?usp=drivesdk&ouid=107286053246224902318&rtpof=true&sd=true" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>

// <tr bgcolor="lightgrey">
// <td>8.</td>
// <td>PEC</td>
// <td>Professional Elective Courses</td>
// <td></td>
// <td></td>
// </tr>
// <tr>
// <td></td>
// <td>CSDX206</td>
// <td>Multimedia Design Program</td>
// <td>Module1</td>
// <td><a href="https://docs.google.com/document/d/1uvWN8bIKFM2bPuCJDuw5DyBFtwb0yQpZ/edit?usp=drivesdk&rtpof=true&sd=true" target="_blank">click here</a></td>

// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="https://docs.google.com/presentation/d/1v3scsPc7uLWLi0PF8NXDh4pFd6JkdnBs/edit?usp=drivesdk&ouid=107286053246224902318&rtpof=true&sd=true" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td>CSDX204</td>
// <td>Scripting Languages</td>
// <td>Module1</td>
// <td><a href="https://docs.google.com/document/d/1uCtLACi3L_axS4Z9udLEX4Khncn8p8qY/edit?usp=drivesdk&ouid=107286053246224902318&rtpof=true&sd=true" target="_blank">click here</a></td>


// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="https://drive.google.com/file/d/1sd5HLpG8n0fvhDHxVzzOk9GIN8wQrDyZ/view?usp=drivesdk" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td>CSDX211</td>
// <td>Information Ethics and Visualization</td>
// <td>Module1</td>
// <td><a href="https://docs.google.com/presentation/d/e/2PACX-1vSb4jll7JtS5qcOoJC4uQSP0OLo7ckDMuP-u0M-fIPViK1-y11-IDAbiyMYByBxBQ/pub?start=true&loop=true&delayms=3000&slide=id.p1" target="_blank">click here</a></td>

// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="https://docs.google.com/presentation/d/e/2PACX-1vT8Kj_gI29XWT6syAoKu79WGZWcjDMM8rFmNHg0GQ3-64SPi7YaPJVtwCbGspW2oA/pub?start=true&loop=true&delayms=3000&slide=id.p1" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>

// <tr bgcolor="lightgrey">
// <td>9.</td> 
// <td>CSD 2206</td>
// <td>Computer Communication and Networks Laboratory</td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr bgcolor="lightgrey">
// <td>10.</td> 
// <td>CSD 2207</td>
// <td>Database Management Systems Laboratory</td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr bgcolor="lightgrey">
// <td>10.</td> 
// <td>CSD 2242</td>
// <td>Microprocessor and embedded design Laboratory</td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// </table>  
           
            
//       `;
//   }  else if (branch === 'B tech' && department === 'cse(Iot)' && semester === 'semester5') {
      
//       noteResult.innerHTML = `
//           <h2>B tech-Computer Science engineering(Internet of things)- Semester 5 Notes</h2>
//             <table>
// <tr bgcolor="black">
// <th>s.no</th>
// <th width= 10% ">Course code</th>
// <th width="50%">Course name</th>
// <th width= "15% ">Module</th>
// <th width= "15%" >PDF Link</th> 
// </tr>


// <tr bgcolor="lightgrey">

//   <td>1.</td>
//    <td>CSD 3102</td>
//   <td>Artificial Intelligence Techniques</td>
//   <td>Module 1</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
//  <td></td>
//  <td></td>
//  <td></td>
//   <td>Module 2</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 3</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 4</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr> 
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 5</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>2.</td> 
// <td>GED 3101 </td>
// <td>Communication Skills For Career Success</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>3.</td>
// <td>CSD 3101</td> 
// <td>Theory of Computation</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>Module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>4.</td> 
// <td></td>
// <td>Elective Courses</td>
// <td></td>
// <td></td>
// </tr>
// <tr>
// <td></td>
// <td>CSDX 103</td>
// <td>IoT in Health Care</td>
// <td>Module 1</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td>CSDX 352</td>
// <td> Wearable computing</td>
// <td>module 1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr>
// <td></td>
// <td>CSDX 103</td>
// <td> Cyber Laws And Ethics </td>
// <td>module 1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>


// <td></td>
// <td>CSDX 102</td>
// <td>Distributed Computing</td>
// <td>module 1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr>
// <td></td>
// <td>CSDX 111</td>
// <td>Foundation On Robotics</td>
// <td>module 1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <td></td>
// <td>CSDX 106</td>
// <td>Open Source Technologies</td>
// <td>module 1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr>
// <td></td>
// <td>CSDX 104</td>
// <td>Virtualization Techniques</td>
// <td>module 1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>


// <tr bgcolor="lightgrey">
// <td>5.</td>
// <td></td>
// <td>Intenship</td>
// <td>project</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr bgcolor="lightgrey">
// <td>6.</td> 
// <td>CSD 3106</td>
// <td>Artificial Intelligence and Machine Learning Laboratory</td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>7.</td> 
// <td>CSD 3105</td>
// <td>Internet and Web programming Laboratory</td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>8.</td> 
// <td>CSD 3104</td>
// <td>Data Mining and Data Warehousing</td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>9.</td> 
// <td>CSD 3102</td>
// <td>IoT Architecture and Protocols </td>
// <td>module 1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>10.</td> 
// <td>CSD 3104</td>
// <td>Data Mining and Data Warehousing </td>
// <td>module 1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// </table>  
//       `;
//   }  else if (branch === 'B tech' && department === 'cse(Iot)' && semester === 'semester6') {
      
//       noteResult.innerHTML = `
//           <h2>B tech-Computer Science engineering(Internet of things)- Semester 6 Notes</h2>
//        <table>
// <tr bgcolor="black">
// <th>s.no</th>
// <th width= 10% ">Course code</th>
// <th width="50%">Course name</th>
// <th width= "15% ">Module</th>
// <th width= "15%" >PDF Link</th> 
// </tr>
// <tr bgcolor="lightgrey">
// <td>1.</td> 
// <td>MSD 3281 </td>
// <td>Entrepreneurship </td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr bgcolor="lightgrey">

//   <td>2.</td>
//    <td></td>
//   <td>Humanities Elective II</td>
//   <td>Modules</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr bgcolor="lightgrey">

//   <td>3.</td>
//    <td></td>
//   <td>Open Elective I</td>
//   <td>Modules</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>4.</td> 
// <td>CSD 3241 </td>
// <td>Privacy and security of IOT</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>5.</td>
// <td>CSD 3202</td> 
// <td>Compiler Design</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>6.</td> 
// <td>GED 3201</td>
// <td>Reasoning and Aptitude for Engineers</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr bgcolor="lightgrey">

//   <td>6.</td>
//    <td></td>
//   <td>Professional elective</td>
//   <td>Modules</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr bgcolor="lightgrey">
// <td>7.</td> 
// <td>CSD 3203</td>
// <td>Compiler Laboratory</td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>8</td> 
// <td>CSD 3242</td>
// <td>Mobile Application Development for IoT laboratory</td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// </table>       

//       `;
//   }  else if (branch === 'B tech' && department === 'cse(Iot)' && semester === 'semester7') {
      
//       noteResult.innerHTML = `
//           <h2>B tech-Computer Science engineering(Internet of things)- Semester 7 Notes</h2>
//              <table>
// <tr bgcolor="black">
// <th>s.no</th>
// <th width= 10% ">Course code</th>
// <th width="50%">Course name</th>
// <th width= "15% ">Module</th>
// <th width= "15%" >PDF Link</th> 
// </tr>

// <tr bgcolor="lightgrey">

// <td>1.</td>
// <td></td>
// <td>General Elective</td>
// <td></td>
// <td></td>
// </tr>
// <tr>
// <td></td> 
// <td> GECX 209</td>
// <td>Usability Engineering</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr bgcolor="lightgrey">

// <td>2.</td>
// <td></td>
// <td>open Elective</td>
// <td></td>
// <td></td>
// </tr>
// <tr>       
// <td></td>
//    <td>GECX 205</td>
//   <td>Industrial Safety</td>
//   <td>Module 1</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
//  <td></td>
//  <td></td>
//  <td></td>
//   <td>Module 2</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 3</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 4</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr> 
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 5</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
//   <td></td>
//    <td>GECX 201</td>
//   <td>Green Design and Sustainability</td>
//   <td>Module 1</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
//  <td></td>
//  <td></td>
//  <td></td>
//   <td>Module 2</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 3</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 4</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr> 
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 5</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr>
// <td></td> 
// <td>GECX 216</td>
// <td>Principles of Communication Systems</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td>GECX 219</td> 
// <td>Advanced Entrepreneurship</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td> 
// <td>GECX 220</td>
// <td>Electric Vehicles</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>3.</td>
// <td>CSC 4141</td>
// <td>Privacy and Security in IoT</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>4.</td>
// <td>CSC 4102</td>
// <td>Compiler Design</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>4.</td>
// <td>CSC 4102</td>
// <td>Cloud Computing</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>5.</td> 
// <td>CSC 4104</td>
// <td>compiler Laboratory</td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>


// <tr bgcolor="lightgrey">
// <td>6.</td>
// <td></td>
// <td></td>
// <td></td>
// <td></td>
// </tr>
// <tr>
// <td></td>
// <td>CSCX 354</td>
// <td>Biometric Security and IoT</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td>CSCX 144</td>
// <td>Intrusion Detection and prevention</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td>CSCX 149</td>
// <td>AAIP-Animation with Portfolio Development</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td>CSCX 151</td>
// <td>Advanced programming for Data Science with Python</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td>CSCX 171</td>
// <td>Web Analytics and Social Media mining</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td>CSCX 173</td>
// <td>Full Stack Mobile Application Development II(Back End)</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td>CSCX 174</td>
// <td>5G Wireless Communication Techniques</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>7.</td>
// <td></td>
// <td>Intenship</td>
// <td>Project</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// </table>

            
//       `;
//   }  else if (branch === 'B tech' && department === 'cse(Iot)' && semester === 'semester8') {
      
//       noteResult.innerHTML = `
//           <h2>B tech-Computer Science engineering(Internet of things)- Semester 8 Notes</h2>
//                   <h2>project work</h2>
//         <table>
// <tr  bgcolor="black">
// <td>s.no</th>
// <th width= 10 % ">Course code</th>
// <th width="50%">Course name</th>
// <th width= "15% ">Module</th>
// <th width= "15%" >PDF Link</th>

// </tr>
// <tr  bgcolor="lightgrey"  >
// <td>1.</td>
// <td></td>
// <td>project</td>
// <td></td>

// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// </table>
             
//       `;
//   }  else if (branch === 'B tech' && department === 'cse(Aids)' && semester === 'semester1') {
      
//       noteResult.innerHTML = `
//           <h2>B Tech -Computer Science engineering(artificial intelligence and data science)- Semester 1 Notes</h2>
//            <div class="table-container">        
// <table>
// <tr bgcolor="black"><div class="tableclr">
// <th>s.no</th>
// <th width= 106 % ">Course code</th>
// <th width="50%">Course name</th>
// <th width= "15% ">Module</th>
// <th width= "15%" >PDF Link</th>
// </div>
// </tr>
// <tr bgcolor="lightgrey">
// <td>1.</td>
// <td>PHD 1182</td>
// <td>Engineering Physics</td>
// <td>Module 1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td> </td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr bgcolor="lightgrey">
//   <td>2.</td>
//   <td>CHD 1182</td>
//   <td>Chemistry for Electrical and Electronic Engineering</td>
//   <td>Module 1</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
//  <td></td>
// <td></td>
//  <td></td>
//   <td>Module 2</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
//   <td></td>
//   <td></td>
//   <td></td>
//   <td>Module 3</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
//   <td></td>
//   <td></td>
//   <td></td>
//   <td>Module 4</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr> 
//   <td></td>
//  <td></td>
//   <td></td>
//   <td>Module 5</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>3.</td> 
// <td>MAD 1181</td>       
// <td>Algebra and Differential Calculus</td>
// <td>Module 1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td> </td>
// <td></td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>4.</td> 
// <td>GED 1101</td> 
// <td>  Engineering Graphics</td>
// <td>Module 1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td> </td>
// <td></td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>5.</td> 
// <td>GED 1102</td>
// <td>Engineering Design</td>
// <td>Module 1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td> </td>
// <td></td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">   
// <td>6.</td> 
// <td>GED 1103 </td
// <tr>
// <td> manufactoring laboratoty practice </td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <td></td> 
// <td></td
// <tr>
// <td> ECE lab </td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <td></td> 
// <td></td
// <tr>
// <td> EEE lab </td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>7.</td> 
// <td>GED 1104</td> 
// <td>  programming for problem solving </td>
// <td>Module 1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td> </td>
// <td></td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">    

// <td>8.</td> 
// <td>GED 1104</td> 
// <td>  programming for problem solving lab </td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// </table>
             
//       `;
//   } else if (branch === 'B tech' && department === 'cse(Aids)' && semester === 'semester2') {
      
//       noteResult.innerHTML = `
//           <h2>B tech -Computer Science engineering(artificial intelligence and data science)- Semester 2 Notes</h2>
//               <table>
// <tr bgcolor="black">
// <th>s.no</th>
// <th width= 10% ">Course code</th>
// <th width="50%">Course name</th>
// <th width= "15% ">Module</th>
// <th width= "15%" >PDF Link</th> 
// </tr>
// <tr bgcolor="lightgrey">
// <td>1.</td> 
// <td>PHDX 05</td>
// <td>semiconductor physics for information technology</td>
// <td>Module1</td>
// <td><a href="https://drive.google.com/file/d/1vZcDfDC21o-8_O5pwLb0OlQKasR8viue/view?usp=drivesdk" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="https://drive.google.com/file/d/1vggx5OpyLrBH6iz-f3zCNKbhbJmrQ3JV/view?usp=drivesdk" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr bgcolor="lightgrey">

//   <td>2.</td>
//    <td>CHDX 04</td>
//   <td>functional material and application </td>
//   <td>Module 1</td>
//   <td><a href="https://drive.google.com/file/d/1v9wo9vOCMFsFs94UKhIeldvx6M4gXRmr/view?usp=drivesdk" target="_blank">click here</a></td>
// </tr>
// <tr>
//  <td></td>
//  <td></td>
//  <td></td>
//   <td>Module 2</td>
//   <td><a href="https://drive.google.com/file/d/1vMzi6gL8bPfzkYUBSumXERGW6fmw3Hnm/view?usp=drivesdk" target="_blank">click here</a></td>
// </tr>
// <tr>
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 3</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 4</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr> 
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 5</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>3.</td> 
// <td>MAD 128 </td>
// <td>statistics</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>4.</td>
// <td>GED 1202</td> 
// <td>Basic Electrical and electronics engineering</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>5.</td> 
// <td>GED 1201</td>
// <td>Engineering mechanics</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>6.</td>
// <td>END 1281</td>
// <td>English for engineers</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>7.</td>
// <td>GED 1206</td>
// <td>Environmental Science</td>
// <td>Module1</td>
// <td><a href="https://drive.google.com/file/d/1vhq0S1L7FgO4he9kl997-qnc3gPfykPK/view?usp=drivesdk" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="https://drive.google.com/file/d/1vj79r8-rxkMEvvrjeckrZcRLvpJAr3aH/view?usp=drivesdk" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>8.</td>
// <td>CSD 1251</td>
// <td>Artificial Intelligence </td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>9.</td> 
// <td>GED 1202 </td>
// <td> B EEE lab</td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// ----
// </table> 
             
//       `;
//   }  else if (branch === 'B tech' && department === 'cse(Aids)' && semester === 'semester3') {
      
//       noteResult.innerHTML = `
//           <h2>B Tech-Computer Science(artificial intelligence and data science) - Semester 3 Notes</h2>
//         <table >
// <tr bgcolor="black">
// <th>s.no</th>
// <th width= 10% ">Course code</th>
// <th width="50%">Course name</th>
// <th width= "10% ">Module</th>
// <th width= "10%" >PDF Link</th>
// </tr>
// <tr bgcolor="lightgrey">
// <td>1</td>
// <td></td>
// <td>Human elective</td>
// <td></td>
// <td></td>
// </tr>
// <tr>
// <td></td>
// <td>SSDX 01</td>
// <td>engineering economics and management</td>
// <td>Module 1</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 2</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td>SSDX 02</td>
// <td>Sociology of Science and Technology</td>
// <td>Module 1</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 2</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr> 
// <tr>
// <td></td>
// <td>SSDX 03</td>
// <td>Industrial Economics and Management</td>
// <td>Module 1</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 2</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr> 
// <tr>
// <td></td>
// <td>SSDX 04</td>
// <td>Dynamics of Indian Social Structure</td>
// <td>Module 1</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 2</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// <tr>
// <td>2.</td>
// <td>MADX 2181</td>
// <td>statics for data analysis</td>
// <td>Module 1</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 2</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>

// <tr bgcolor="lightgrey" >
// <td>3</td>
// <td>CSD 2152</td>
// <td>Programming in python language</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr bgcolor="lightgrey">
// <td>4</td>
// <td>CSD 2154</td>
// <td>Database Management and SQL</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>5</td>
// <td>CSD 2153</td>
// <td>Principles of Software Engineering</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr bgcolor="lightgrey">
// <td>6</td>
// <td>GED 2101</td>
// <td>Essential Skills and Aptitude for Engineers</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>7</td>
// <td>CSD 2105</td>
// <td> Python Programming Laboratory </td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>  
// <tr bgcolor="lightgrey">
// <td>8</td>
// <td>CSD 2106</td>
// <td> Foundation of Data Structures Laboratory</td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr> 
// <tr bgcolor="lightgrey">
// <td>9</td>
// <td>CSD 2156</td>
// <td>Database Management and SQL Laboratory</td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>10</td>
// <td>GED 2101</td>
// <td>Foundation of Data Structures </td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr> 
// </table>
           
            
                                                               
                
//       `;
//   }     else if (branch === 'B tech' && department === 'cse(Aids)' && semester === 'semester4') {
      
//       noteResult.innerHTML = `
//           <h2>B tech-Computer Science engineering(Artificial Intelligence and Data Science) -Semester 4 Notes</h2>                                                                                                                       <table>
// <tr bgcolor="black">
// <th>s.no</th>
// <th width= 10% ">Course code</th>
// <th width="50%">Course name</th>
// <th width= "15% ">Module</th>
// <th width= "15%" >PDF Link</th> 
// </tr>
// <tr bgcolor="lightgrey">
// <td>1.</td> 
// <td>CSD 2251</td>
// <td>Network methodologies</td>
// <td>Module1</td>
// <td><a href="https://drive.google.com/file/d/1jCsJITnRgLochRrpOsoLoEZj21g3E3dL/view?usp=drivesdk" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="https://drive.google.com/file/d/1jHbuxabYX4m_fBRKSKEWD7C-urOycgzs/view?usp=drivesdk" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="https://drive.google.com/file/d/16XrM0ChtisN4EQKPnAGfgrIIkBgsYpnc/view?usp=drivesdk" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="https://drive.google.com/file/d/16h3Ykyqve70jfHrFvZKznoy2pdRZLBxM/view?usp=drivesdk" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>

// <tr bgcolor="lightgrey">

//   <td>2.</td>
//    <td>CSD 2259</td>
//   <td>Algorithm design techniques</td>
//   <td>Module 1</td>
//   <td><a href="https://docs.google.com/document/d/1q02PGoP2YD0jzOOLU9mrR5OQU1iJ6dVC/edit?usp=drivesdk&ouid=107286053246224902318&rtpof=true&sd=true" target="_blank">click here</a></td>

// </tr>
// <tr>
//  <td></td>
//  <td></td>
//  <td></td>
//   <td>Module 2</td>
//   <td><a href="https://drive.google.com/file/d/1q55MPVR19MjS3WYGQw4cRlzTGWVbLKoo/view?usp=drivesdk" target="_blank">click here</a></td>

// </tr>
// <tr>
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 3</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 4</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr> 
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 5</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr bgcolor="lightgrey">
// <td>3.</td> 
// <td>CSD 2254</td>
// <td>Data warehousing and data mining</td>
// <td>Module1</td>
// <td><a href="https://drive.google.com/file/d/1muvGObCDXEWR_Fo594kPJLPhPxJO5530/view?usp=drivesdk" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="https://drive.google.com/file/d/1n54m4WHiexPqOvWBPDySacsbLH30Ii-P/view?usp=drivesdk" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr bgcolor="lightgrey">
// <td>4.</td>
// <td>CSD 2260</td> 
// <td>Essentials of data science</td>
// <td>Module1</td>
// <td><a href="https://drive.google.com/file/d/1rnOPLFo71qihMyz1nKBwupIcNSBXmoPV/view?usp=drivesdk" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="https://drive.google.com/file/d/1ruzPgz-KLHGOi8ghH4zQTQbNMX-2vozB/view?usp=drivesdk" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr bgcolor="lightgrey">
// <td>5.</td> 
// <td>CSD 2256</td>
// <td>Fundemendals of operating system</td>
// <td>Module1</td>
// <td><a href="https://docs.google.com/presentation/d/1pEwoYJN91XPMDTojVSa2sIm_kRA7c9py/edit?usp=drivesdk&ouid=107286053246224902318&rtpof=true&sd=true" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="https://drive.google.com/file/d/1pUDkrmK7QJVZ3HYg4XMV5ZWi2PN9o4Eo/view?usp=drivesdk" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr bgcolor="lightgrey">
// <td>6.</td>
// <td>GED 2201</td>
// <td>Workplace Skills and Aptitude for Engineers</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr bgcolor="lightgrey">
// <td>7.</td>
// <td>GED 2202</td>
// <td>Indian Constitution and Human Rights</td>
// <td>Module1</td>
// <td><a href="https://drive.google.com/file/d/1g9hPSxqDioltpv0U5XOkT41YcUgOSlOl/view?usp=drive_link" target="_blank">click here</a></td>

// </tr>
// <tr>

// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="https://drive.google.com/file/d/1gLic-XgF4vcbA_ZI0venzyt-vPrq5WWk/view?usp=drive_link" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="https://docs.google.com/document/d/1zMAMfuowkFKQLrgtboi2L2lSvXX2QFX5/edit?usp=drivesdk&ouid=107286053246224902318&rtpof=true&sd=true" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>

// <tr bgcolor="lightgrey">
// <td>8.</td>
// <td>PEC</td>
// <td>Professional Elective Courses</td>
// <td></td>
// <td></td>
// </tr>
// <tr>
// <td></td>
// <td>CSDX601</td>
// <td>Business Intelligence</td>
// <td>Module1</td>
// <td><a href="https://drive.google.com/file/d/1tGE2Qj-YQE13-Ishlfz8Byge_itLZ0iE/view?usp=drivesdk" target="_blank">click here</a></td>


// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="https://drive.google.com/file/d/1tSomQOM_eIEjZNmbAwhDiHNsthXoZ9Dv/view?usp=drivesdk" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td>CSDX604</td>
// <td>Ethics in Artificial Intelligence and Data Science</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td>CSDX608</td>
// <td>Data Science For intelligent Gaming</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>


// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>



// <tr bgcolor="lightgrey">
// <td>9.</td> 
// <td>CSD 2257</td>
// <td>Algorithmic design techniques Laboratory</td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// <tr bgcolor="lightgrey">
// <td>10.</td> 
// <td>CSD 2258</td>
// <td>Data mining tools Laboratory</td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>

// </tr>
// </table> 



//       `;
//   }     else if (branch === 'B tech' && department === 'cse(Aids)' && semester === 'semester5') {
      
//       noteResult.innerHTML = `
//           <h2>B tech-Computer Science engineering(Artificial Intelligence and Data Science) -Semester 5 Notes</h2>
//       <table>
// <tr bgcolor="black">
// <th>s.no</th>
// <th width= 10% ">Course code</th>
// <th width="50%">Course name</th>
// <th width= "15% ">Module</th>
// <th width= "15%" >PDF Link</th> 
// </tr>
// <tr bgcolor="lightgrey">
// <td>1.</td> 
// <td>CSD 3151</td>
// <td> Data and Network Security</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr bgcolor="lightgrey">

//   <td>2.</td>
//    <td>CSD 3152</td>
//   <td>Cloud Computing Services</td>
//   <td>Module 1</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
//  <td></td>
//  <td></td>
//  <td></td>
//   <td>Module 2</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 3</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 4</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr> 
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 5</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>3.</td> 
// <td>GED 3101 </td>
// <td>Communication Skills For Career Success</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>4.</td>
// <td>CSD 3153</td> 
// <td>Automata Theory</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>Module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>5.</td> 
// <td></td>
// <td>Elective Courses</td>
// <td></td>
// <td></td>
// </tr>
// <tr>
// <td></td>
// <td>CSDX 501</td>
// <td>Web and Social Media</td>
// <td>Module 1</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td>CSDX 502</td>
// <td>Artificial Neural Networks</td>
// <td>module 1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr>
// <td></td>
// <td>CSDX 509</td>
// <td>Pattern Recognition</td>
// <td>module 1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">

// <td>6.</td>
// <td>CSD 3154</td>
// <td>Machine Learning Techniques</td>
// <td>module 1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>




// <tr bgcolor="lightgrey">
// <td>7.</td>
// <td></td>
// <td>Intenship</td>
// <td>project</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr bgcolor="lightgrey">
// <td>8.</td> 
// <td>CSD 3155</td>
// <td>Machine Learning Laboratory</td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>9.</td> 
// <td>CSD 3156/td>
// <td>Data and Security Lab</td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// </table>    


//       `;
//   }  else if (branch === 'B tech' && department === 'cse(Aids)' && semester === 'semester6') {
      
//       noteResult.innerHTML = `
//           <h2> B tech-Computer Science engineering(Artificial Intelligence and Data Science) - Semester 6 Notes</h2>
          
//           <table>
// <tr bgcolor="black">
// <th>s.no</th>
// <th width= 10% ">Course code</th>
// <th width="50%">Course name</th>
// <th width= "15% ">Module</th>
// <th width= "15%" >PDF Link</th> 
// </tr>
// <tr bgcolor="lightgrey">
// <td>1.</td> 
// <td>MSD 3281 </td>
// <td>Entrepreneurship </td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr bgcolor="lightgrey">

//   <td>2.</td>
//    <td></td>
//   <td>Humanities Elective II</td>
//   <td>Modules</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr bgcolor="lightgrey">

//   <td>3.</td>
//    <td></td>
//   <td>Open Elective I</td>
//   <td>Modules</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>4.</td> 
// <td>CSD 3251 </td>
// <td>Data analysis and virtualization</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>5.</td>
// <td>CSD 3252</td> 
// <td>Iot and embedded system</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>6.</td> 
// <td>GED 3201</td>
// <td>Reasoning and Aptitude for Engineers</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr bgcolor="lightgrey">

//   <td>7.</td>
//    <td></td>
//   <td>Open Elective I</td>
//   <td>Modules</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr bgcolor="lightgrey">

//   <td>8.</td>
//    <td></td>
//   <td>Professional elective </td>
//   <td>Modules</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>9.</td> 
// <td>CSD 3204</td>
// <td>Mobile application Laboratory</td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>10.</td> 
// <td>CSD 3253</td>
// <td>Data analysis and virtualization Laboratory</td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>11.</td> 
// <td>CSD 3255</td>
// <td>Software tools and technique Laboratory</td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// </table>    
          
//       `;
//   }   else if (branch === 'B tech' && department === 'cse(Aids)' && semester === 'semester7') {
       
//       noteResult.innerHTML = `
//           <h2> B tech-Computer Science engineering(Artificial Intelligence and Data Science) - Semester 7 Notes</h2>
//          <table>
// <tr bgcolor="black">
// <th>s.no</th>
// <th width= 10% ">Course code</th>
// <th width="50%">Course name</th>
// <th width= "15% ">Module</th>
// <th width= "15%" >PDF Link</th> 
// </tr>

// <tr bgcolor="lightgrey">

// <td>1.</td>
// <td></td>
// <td>General Elective</td>
// <td></td>
// <td></td>
// </tr>
// <tr>
// <td></td> 
// <td> GECX 209</td>
// <td>Usability Engineering</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr bgcolor="lightgrey">

// <td>2.</td>
// <td></td>
// <td>open Elective</td>
// <td></td>
// <td></td>
// </tr>
// <tr>       
// <td></td>
//    <td>GECX 205</td>
//   <td>Industrial Safety</td>
//   <td>Module 1</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
//  <td></td>
//  <td></td>
//  <td></td>
//   <td>Module 2</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 3</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 4</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr> 
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 5</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
//   <td></td>
//    <td>GECX 201</td>
//   <td>Green Design and Sustainability</td>
//   <td>Module 1</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
//  <td></td>
//  <td></td>
//  <td></td>
//   <td>Module 2</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 3</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 4</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr> 
//   <td></td>
//    <td></td>
//   <td></td>
//   <td>Module 5</td>
//   <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <tr  >
// <td></td> 
// <td>GECX 216</td>
// <td>Principles of Communication Systems</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td>GECX 219</td> 
// <td>Advanced Entrepreneurship</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td> 
// <td>GECX 220</td>
// <td>Electric Vehicles</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>3.</td>
// <td>CSC 4151</td>
// <td>Software Project Management Techniques</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>4.</td>
// <td>CSC 4152</td>
// <td>Predictive Analytics</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>5.</td>
// <td>CSC 4153</td>
// <td>Deep Learning Algorithm and Architectures</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>6.</td> 
// <td>CSC 4154</td>
// <td>Model Deployment Laboratory</td>
// <td>Lab</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>7.</td> 
// <td>CSD 1201</td>
// <td>Internship</td>
// <td>project</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr bgcolor="lightgrey">
// <td>8.</td>
// <td></td>
// <td>Elective</td>
// <td></td>
// <td></td>
// </tr>
// <tr>
// <td></td>
// <td>CSCX 506</td>
// <td>Advanced Artificial Intelligence Systems</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>

// <td></td>
// <td>CSCX 506</td>
// <td>Advanced Artificial Intelligence Systems</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td>CSCX 514</td>
// <td>Block chain </td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td>CSCX 524</td>
// <td>Graph Theory and its Applications in Data Science</td>
// <td>Module1</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 2</td>
// <td><a href="./update.html" target="_blank"> click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td> </td>
// <td>module 3</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 4</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td>Module 5</td>
// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// </table>       
           
//       `;
//   }  else if (branch === 'B tech' && department === 'cse(Aids)' && semester === 'semester8') {
      
//       noteResult.innerHTML = `
//           <h2>B tech-Computer Science engineering(Artificial Intelligence and Data Science)- Semester 8 Notes</h2>
//            <h2> project work<h2>
           
//         <table>
// <tr  bgcolor="black" >
// <td>s.no</th>
// <th width= 10 % ">Course code</th>
// <th width="50%">Course name</th>
// <th width= "15% ">Module</th>
// <th width= "15%" >PDF Link</th>

// </tr>
// <tr  bgcolor="lightgrey"  >
// <td>1.</td>
// <td></td>
// <td>project</td>
// <td></td>

// <td><a href="./update.html" target="_blank">click here</a></td>
// </tr>
// </table>
//       `; 
   
//     } 
//   }
// )
//   }
// else {
//   console.error("Element with class 'findbtn' not found.");
// }
// });
 