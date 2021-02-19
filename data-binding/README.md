# DataBinding

# Property Binding e Interpolação

# Interpolação


	- Define a propriedade e método e de valor a ela (TS)

	<blockquete> 
			cursoAngular: boolean = true;
		  	teste: string = 'Valor do componente'; 

		  	getCurtirCurso(){
			    return true;
			 }
	</blockquete>

	- Formas de fazer a interpolação (HTML)

	<blockquete> 

			<p>{{ teste }}</p>
		    <p>Valor de uam soma: {{getCalculo()}}</p>
		    <p>Resultado de 1 + 1 é: {{ 1 + 1 }}</p>
		    <p>O curso é bom: {{ cursoAngular && getCurtirCurso()}}</p>

	</blockquete> 

# Property Binding

	- Cria a propriedade com o valor (TS)

	<blockquote>urlImagem = 'http://lorempixel.com/400/200/';</blockquote>

		- Formas de fazer o property binding (HTML)

	<blockquote>

	 <!--Interpolação também faz  property binding!-->
     <img src="{{ urlImagem }}">

                    
	<!--Exemplo claro de property binding-->
	<img [src]="urlImagem ">

	<!--Formato padrão é através de bind-nomePropriedade-->
	<!--<img bind-src="urlImagem" />-->	   
		
	</blockquote>

		- Quando não existe uma propriedade no elemento, usa-se [attr.colspan]

	<blockquote> [attr.colspan] </blockquote>

# Class e Style binding

	- Usa a propriedade de class ou style, para manipular o DOM dependendo das escolhas do select!

	<blockquote>

		<article>

		    <h3>Property Binding com CSS/Class-Binding</h3>
		    
		    <select #varSelect (change)="0">
		        <option value="alert-success">Sucesso</option>
		        <option value="alert-info">Info</option>
		        <option value="alert-warning">Alerta</option>
		        <option value="alert-danger">Erro</option>
		    </select>
		    <br><br>
		    <div class="alert {{ varSelect.value}}" role="alert">Otexto é colorido de acordo com oque foi escolhido</div>
		    <br><br>

		    <div class="alert" role="alert" [class.alert-success]="varSelect.value == 'alert-success'">Sucesso</div>
		    <div class="alert" role="alert" [class.alert-info]="varSelect.value == 'alert-info'">Info</div>
		    <div class="alert" role="alert" [class.alert-warning]="varSelect.value == 'alert-warning'">Alerta</div>
		    <div class="alert" role="alert" [class.alert-danger]="varSelect.value == 'alert-danger'">Erro</div>

		    <br><br>
		    <div class="alert alert-danger" role="alert" [style.display]="varSelect.value == 'alert-danger' ? 'block': 'none'">Só exibe caso tenha erro</div>

		</article>

	</blockquote>

# Event binding


	- 

<blockquote>	</blockquote>



