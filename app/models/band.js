import Model from 'ember-data/model';
// import attr from 'ember-data/attr';
import DS from 'ember-data';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  songs: DS.hasMany('song')
});
