 function calculaValor(){

            var operacao = document.getElementById('operacao').value;

            var num1 = document.getElementById('num1').value;
            var num2 = document.getElementById('num2').value;

            // Força um resultado numérico
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            
            if(num1 == "" || num1 == null){
                alert('Digite o valor de num1');
                return false;
            }

            if(num2 == "" || num2 == null){
                alert('Digite o valor de num2');
                return false;
            }
            
            
            var resultado = null


            switch(operacao){

                case '1':
                  resultado = num1 + num2;
                  break;

                case '2':
                  resultado = num1 - num2;
                  break;  

                case '3':
                  resultado = num1 * num2;
                  break;  

                case '4':
                  resultado = num1 / num2;
                  break;  
                 
                case '5':
                  resultado = num1 % num2;
                  break;  

                default:
                  alert('Escolha uma operação');
                  break;  
            }


            document.getElementById('resultado').value = resultado;
        }