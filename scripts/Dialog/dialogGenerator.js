const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.dialog')


eventHub.addEventListener("eateryDetail", e => {

    // Grab the zipcode from the customEvent object and split it since more than one is passed
    let title = e.detail.title
    let body = e.detail.body
    console.log('I hear it!')
    render(title, body)
});

export const render = (title, body) => {
    contentTarget.innerHTML = `
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
        <div class="modal-body">
        ${body} 
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    `
    
    // document.getElementById("btnModal").click()
}