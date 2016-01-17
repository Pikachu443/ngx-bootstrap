import {Component} from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';

import {TAB_DIRECTIVES} from '../../ng2-bootstrap';
import {PaginationDemo} from './pagination/pagination-demo';

let name = 'Pagination';
let src = 'https://github.com/valor-software/ng2-bootstrap/blob/master/components/pagination/';

// webpack html imports
let doc = require('../../components/pagination/readme.md');
let titleDoc = require('../../components/pagination/title.md');

let ts = require('!!prismjs?lang=typescript!./pagination/pagination-demo.ts');
let html = require('!!prismjs?lang=markup!./pagination/pagination-demo.html');

@Component({
  selector: 'pagination-section',
  directives: [PaginationDemo, TAB_DIRECTIVES, CORE_DIRECTIVES],
  template: `
  <br>
  <section id="${name.toLowerCase()}">
    <div class="row"><h1>${name}<small>(<a href="${src}">src</a>)</small></h1></div>

    <hr>

    <div class="row"><div class="col-md-12">${titleDoc}</div></div>

    <div class="row">
      <h2>Example</h2>
      <div class="card card-block panel panel-default panel-body">
        <pagination-demo></pagination-demo>
      </div>
    </div>

    <br>

    <div class="row">
      <tabset>
        <tab heading="Markup">
          <div class="card card-block panel panel-default panel-body">
            <pre class="language-html"><code class="language-html" ngNonBindable>${html}</code></pre>
          </div>
        </tab>
        <tab heading="TypeScript">
          <div class="card card-block panel panel-default panel-body">
            <pre class="language-typescript"><code class="language-typescript" ngNonBindable>${ts}</code></pre>
          </div>
        </tab>
      </tabset>
    </div>

    <br>

    <div class="row">
      <h2>API</h2>
      <div class="card card-block panel panel-default panel-body">${doc}</div>
    </div>
  </section>
  `
})
export class PaginationSection {
}
