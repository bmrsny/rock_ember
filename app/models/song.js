import Model from 'ember-data/model';
import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  band: DS.belongsTo('band'),
  title: DS.attr('string'),
  rating: DS.attr('number')
});
