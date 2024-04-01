import Swal from 'sweetalert2';

const showAlert = (title, text, icon) => {
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

export default showAlert;
