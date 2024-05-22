import Swal from 'sweetalert2';

const ShowAlert = (title, text, icon) => {
  return Swal.fire({
    title: title,
    text: text,
    icon: icon,
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.reload(); // Reload the page
    }
  });
};

export default ShowAlert;
