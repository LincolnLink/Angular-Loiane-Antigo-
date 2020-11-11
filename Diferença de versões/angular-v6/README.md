# AngularV6

### Novidades da versão!

- Novo pipe: Keyvalue

  - Exibe o objetos com uma forma melhor!

  <blockquete>

    < span>---keyvalue: Inteirando cada propriedade do objeto---</>
    < div *ngFor="let curso of cursos" >
      < ul>
        < li *ngFor="let prop of curso | keyvalue" >
          {{ prop.key }}: {{ prop.value }}
        </>
      </>
    </>
    
  </blockquete>

  - é possivel passar uma função de Pipe!

- Router: Restauração posição do scroll

  - Na configuração de rotas, bota uma configuração de scroll

  - O efeito é: toda vez que volta, ele fica na posição aonde estava o link que foi clickado!

  <blockquete>
      
    @NgModule({
      imports: [RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'enabled'
      })],
      exports: [RouterModule]
    })
    export class AppRoutingModule { }
  </blockquete>

- Router: URL error handler 

   - Quando tem parametros no objetos

   - Tratamento de URL invalidas

   <blockquete>

    RouterModule.forRoot(routes, {
      malformedUriErrorHandler:
        (error: URIError, urlSerializar: UrlSerializer, url: string) =>{
          console.log(url);
          return urlSerializar.parse('/url-invalida');
        }
    })


   </blockquete>

- Router: URL update strantegy

  - Quando pede pro angular atualizar antes ou depois do roteamento feito com sucesso.

  <blockquete>

      RouterModule.forRoot(routes, {
        urlUpdateStrategy: 'eager', // 'deferred'
    })

  </blockquete>

- Encapsulação de view: shadowDOM v1

  <blockquete>
      @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css'],
      // encapsulation: ViewEncapsulation.Emulates, // padrao
      // encapsulation: ViewEncapsulation.Native, // v0
      // encapsulation: ViewEncapsulation.ShadowDom, // v1
    })
  </blockquete>

  - Emulates: Padrão, exibe o style no component!

  - Native: exibe o shadow-root

  - ShadowDom: umaver~sao melhor!


- Suporte TypeScript 2.9

- CLI v6.1

  - Módulos ES2015 em todos os arquivos

  - Mesmo comportamento para serve/test/build

  - Vendor source map

    - ng build -- prod -- source-map --vendor-source-map

    Quando vai para pordução gera um bandom(pacotes de terceiro), com essa flag tem como ver o tamanho de cada biblioteca no nosso bando de produção!


TypeScript 2.8

  - Conditional types e muito mais!

    https://devblogs.microsoft.com/typescript/announcing-typescript-2-8-2/

TypeScript 2.9

 - https://devblogs.microsoft.com/typescript/announcing-typescript-2-9-2/

  - conversor de propriedade getter/setter

  - import() tipos


Link para acompanhar mudanças!


https://slides.com/loiane/novidades-angular-v6-1#/18




    





