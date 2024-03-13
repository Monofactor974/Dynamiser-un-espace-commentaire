function verifierChamps(event) {
  event.preventDefault();

  const prenom = document.querySelector("#first-name").value;
  const nom = document.querySelector("#last-name").value;
  const commentaire = document.querySelector("#message").value;
  const commentaires = document.querySelector("#comment-list");

  function clear() {
    document.querySelector("#first-name").value = "";
    document.querySelector("#last-name").value = "";
    document.querySelector("#message").value = "";
  }
  /*try */ {
    if (prenom == "" || nom == "" || commentaire == "") {
      document.querySelector("#error-message").style.display = "block";
    } else {
      commentaires.innerHTML += `<div class="flex space-x-4 text-sm text-gray-500">
              <div class="flex-1 py-10 border-t border-gray-200">
                <h3 class="font-medium text-gray-900">${prenom} ${nom}</h3>
                <div class="prose prose-sm mt-4 max-w-none text-gray-500">
                  <p>${commentaire}</p>
                </div>
              </div>
            </div>`;
      clear();
    }
  } /*catch (err) {
    console.log(err);
  }*/
}

document.querySelector("form").addEventListener("submit", verifierChamps);
