import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | product/detail', function(hooks) {
  setupRenderingTest(hooks);

  test('it displays data correctly', async function(assert) {
    this.set('price', {
      original: 50,
      current: 30,
    });

    this.set('onChangeColor', function(color) {
      assert.equal(color, 'red', 'Correct color selected');
    });

    this.set('isDetail', true);

    this.set('colors', [{
      color: 'red',
    }]);

    await render(hbs`<Product::Detail
      @price={{this.price}}
      @onChangeColor={{this.onChangeColor}}
      @isDetail={{this.isDetail}}
      @colors={{this.colors}}
      />`);
    
    assert.dom('[data-test-original-price]').hasText('$50.00');
    assert.dom('[data-test-current-price]').hasText('$30.00');
    
    await click('[data-test-color-selector]');
  });
});
