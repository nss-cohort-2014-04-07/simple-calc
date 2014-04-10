(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#add').click(add);
    $('#sub').click(sub);
    $('#mul').click(mul);
    $('#div').click(div);
    $('#exp').click(exp);
    $('#root').click(root);
    $('#fact').click(fact);
  }

  function add(){
    var values = getNums();
    var answer = values[0] + values[1];
    display('#answer1', answer);
  }

  function sub(){
    var values = getNums();
    var answer = values[0] - values[1];
    display('#answer1', answer);
  }

  function mul(){
    var values = getNums();
    var answer = values[0] * values[1];
    display('#answer1', answer);
  }

  function div(){
    var values = getNums();
    var answer = values[0] / values[1];
    display('#answer1', answer);
  }

  function exp(){
    var values = getNums();
    var answer = Math.pow(values[0], values[1]);
    display('#answer1', answer);
  }

  function root(){
    var value = $('#num3').val() * 1;
    var answer = Math.sqrt(value);
    display('#answer2', answer);
  }

  function fact(){
    var value = $('#num3').val() * 1;
    var product = 1;

    for(var i = 2; i <= value; i++){
      product *= i;
    }

    display('#answer2', product);
  }

  function getNums(){
    var x = $('#num1').val() * 1;
    var y = $('#num2').val() * 1;
    return [x, y];
  }

  function display(selector, answer){
    $(selector).text(answer);
  }

})();
