document.getElementById("validation-input").onblur = function() {
        console.log(this.value.length);
        if (this.getAttribute('data-length') != this.value.length) { 
          this.classList.add('invalid');
          
        } else {
          this.classList.replace('invalid', 'valid');
        }
      };