const formatDate = (dateString) => {
    if (!dateString) return ''; // Vérifie si la date est fournie
  
    // Crée un objet Date à partir de la chaîne de date
    const date = new Date(dateString);
  
    // Obtient les différentes parties de la date
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
  
    // Ajoute un zéro devant les chiffres de l'heure et des minutes si nécessaire
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
  
    // Retourne la date formatée
    return `${day} ${month} ${year} ${hours}:${minutes}`;
  }; 