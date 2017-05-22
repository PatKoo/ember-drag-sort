'use strict';

define('dummy/tests/acceptance/index-test', ['qunit', 'dummy/tests/helpers/module-for-acceptance', 'dummy/tests/pages/index', 'ember-cli-chai/qunit'], function (_qunit, _moduleForAcceptance, _index, _qunit2) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  var m = void 0;

  (0, _moduleForAcceptance.default)('Acceptance | index');

  (0, _qunit.test)('visiting /index', (0, _qunit2.withChai)(function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(expect) {
      var firstGroup, expectedTitleGroups;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _index.default.visit();

            case 2:

              expect(currentURL()).equal('/');

              firstGroup = _index.default.listGroups(0);
              expectedTitleGroups = [['Foo', 'Bar', 'Baz', 'Quux'], ['Zomg', 'Lol']];


              expectedTitleGroups.forEach(function (expectedTitles, i) {
                var list = firstGroup.lists(i);

                m = 'List #' + i + ' item count';
                expect(list.items().count, m).equal(expectedTitles.length);

                expectedTitles.forEach(function (expectedTitle, k) {
                  m = 'List #' + i + ' item #' + k + ' content title';
                  expect(list.items(k).content.title, m).equal(expectedTitle);
                });
              });

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }()));

  (0, _qunit.test)('sorting a list', (0, _qunit2.withChai)(function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(expect) {
      var list, expectedTitles;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _index.default.visit();

            case 2:
              list = _index.default.listGroups(0).lists(0);
              _context2.next = 5;
              return list.sort(0, 1, false);

            case 5:
              expectedTitles = ['Bar', 'Foo', 'Baz', 'Quux'];


              m = "List #0 items count";
              expect(list.items().count, m).equal(4);

              expectedTitles.forEach(function (expectedTitle, k) {
                m = 'List #0 item #' + k + ' content title';
                expect(list.items(k).content.title, m).equal(expectedTitle);
              });

            case 9:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }()));

  (0, _qunit.test)('sorting between lists', (0, _qunit2.withChai)(function () {
    var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(expect) {
      var list0, list1, expectedTitles0, expectedTitles1;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _index.default.visit();

            case 2:
              list0 = _index.default.listGroups(0).lists(0);
              list1 = _index.default.listGroups(0).lists(1);
              _context3.next = 6;
              return list0.move(0, list1, 1, false);

            case 6:
              expectedTitles0 = ['Bar', 'Baz', 'Quux'];
              expectedTitles1 = ['Zomg', 'Lol', 'Foo'];


              m = "List #0 items count";
              expect(list0.items().count, m).equal(3);

              expectedTitles0.forEach(function (expectedTitle, k) {
                m = 'List #0 item #' + k + ' content title';
                expect(list0.items(k).content.title, m).equal(expectedTitle);
              });

              m = "List #1 items count";
              expect(list1.items().count, m).equal(3);

              expectedTitles1.forEach(function (expectedTitle, k) {
                m = 'List #1 item #' + k + ' content title';
                expect(list1.items(k).content.title, m).equal(expectedTitle);
              });

            case 14:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }()));
});
define('dummy/tests/acceptance/index-test.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint - acceptance/index-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/index-test.js should pass ESLint.\n');
  });
});
define('dummy/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint - app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint.\n');
  });
});
define('dummy/tests/components/nested-item.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint - components/nested-item.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/nested-item.js should pass ESLint.\n');
  });
});
define('dummy/tests/controllers/index.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint - controllers/index.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint.\n');
  });
});
define('dummy/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    _ember.default.run(application, 'destroy');
  }
});
define('dummy/tests/helpers/destroy-app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint - helpers/destroy-app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint.\n');
  });
});
define('dummy/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var Promise = _ember.default.RSVP.Promise;
});
define('dummy/tests/helpers/module-for-acceptance.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint - helpers/module-for-acceptance.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint.\n');
  });
});
define('dummy/tests/helpers/resolver', ['exports', 'dummy/resolver', 'dummy/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('dummy/tests/helpers/resolver.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint - helpers/resolver.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint.\n');
  });
});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/config/environment'], function (exports, _ember, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = _ember.default.merge({}, _environment.default.APP);
    attributes = _ember.default.merge(attributes, attrs); // use defaults, but you can override;

    return _ember.default.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('dummy/tests/helpers/start-app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint - helpers/start-app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint.\n');
  });
});
define('dummy/tests/integration/components/drag-sort-list-test', ['ember-qunit', 'ember-drag-sort/utils/trigger', 'ember-array/utils', 'sinon', 'ember-cli-chai/qunit', 'ember-test-helpers/wait'], function (_emberQunit, _trigger, _utils, _sinon, _qunit, _wait) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _emberQunit.moduleForComponent)('drag-sort-list', 'Integration | Component | drag sort list', {
    integration: true
  });

  (0, _emberQunit.test)('it works', (0, _qunit.withChai)(function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(expect) {
      var items, dragEndCallback, $item0, $item1;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              items = (0, _utils.A)([{ name: 'foo' }, { name: 'bar' }, { name: 'baz' }]);
              dragEndCallback = _sinon.default.spy();


              this.setProperties({ items: items, dragEndCallback: dragEndCallback });

              this.render(Ember.HTMLBars.template({
                "id": "th1gSqXW",
                "block": "{\"statements\":[[0,\"\\n\"],[6,[\"drag-sort-list\"],null,[[\"items\",\"dragEndAction\"],[[28,[\"items\"]],[33,[\"action\"],[[28,[null]],[28,[\"dragEndCallback\"]]],null]]],{\"statements\":[[0,\"      \"],[11,\"div\",[]],[13],[0,\"\\n        \"],[1,[28,[\"item\",\"name\"]],false],[0,\"\\n      \"],[14],[0,\"\\n\"]],\"locals\":[\"item\"]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
                "meta": {}
              }));

              $item0 = this.$('.dragSortItem:eq(0)');
              $item1 = this.$('.dragSortItem:eq(1)');

              // const itemOffset = $item0.offset()

              (0, _trigger.default)($item0, 'dragstart');
              (0, _trigger.default)($item1, 'dragover', false);
              (0, _trigger.default)($item0, 'dragend');

              _context.next = 11;
              return (0, _wait.default)();

            case 11:

              expect(dragEndCallback).calledOnce;

              expect(dragEndCallback).calledWithExactly({
                group: undefined,
                draggedItem: items.objectAt(0),
                sourceList: items,
                targetList: items,
                sourceIndex: 0,
                targetIndex: 1
              });

            case 13:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }()));

  (0, _emberQunit.test)('sorting with neither dragover nor dragenter', (0, _qunit.withChai)(function () {
    var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(expect) {
      var items, dragEndCallback, $item0;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              items = (0, _utils.A)([{ name: 'foo' }, { name: 'bar' }, { name: 'baz' }]);
              dragEndCallback = _sinon.default.spy();


              this.setProperties({ items: items, dragEndCallback: dragEndCallback });

              this.render(Ember.HTMLBars.template({
                "id": "th1gSqXW",
                "block": "{\"statements\":[[0,\"\\n\"],[6,[\"drag-sort-list\"],null,[[\"items\",\"dragEndAction\"],[[28,[\"items\"]],[33,[\"action\"],[[28,[null]],[28,[\"dragEndCallback\"]]],null]]],{\"statements\":[[0,\"      \"],[11,\"div\",[]],[13],[0,\"\\n        \"],[1,[28,[\"item\",\"name\"]],false],[0,\"\\n      \"],[14],[0,\"\\n\"]],\"locals\":[\"item\"]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
                "meta": {}
              }));

              $item0 = this.$('.dragSortItem:eq(0)');

              // const itemOffset = $item0.offset()

              (0, _trigger.default)($item0, 'dragstart');
              (0, _trigger.default)($item0, 'dragend');

              _context2.next = 9;
              return (0, _wait.default)();

            case 9:

              expect(dragEndCallback).not.called;

            case 10:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function (_x2) {
      return _ref3.apply(this, arguments);
    };
  }()));
});
define('dummy/tests/integration/components/drag-sort-list-test.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint - integration/components/drag-sort-list-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/drag-sort-list-test.js should pass ESLint.\n');
  });
});
define('dummy/tests/page-object', ['exports', 'ember-cli-page-object'], function (exports, _emberCliPageObject) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.fullScope = exports.getContext = exports.findElement = exports.findElementWithAssert = exports.buildSelector = exports.visitable = exports.value = exports.triggerable = exports.text = exports.property = exports.notHasClass = exports.isVisible = exports.isHidden = exports.is = exports.hasClass = exports.selectable = exports.fillable = exports.create = exports.count = exports.contains = exports.collection = exports.clickable = exports.clickOnText = exports.attribute = exports.alias = undefined;
  Object.defineProperty(exports, 'buildSelector', {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.buildSelector;
    }
  });
  Object.defineProperty(exports, 'findElementWithAssert', {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.findElementWithAssert;
    }
  });
  Object.defineProperty(exports, 'findElement', {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.findElement;
    }
  });
  Object.defineProperty(exports, 'getContext', {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.getContext;
    }
  });
  Object.defineProperty(exports, 'fullScope', {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.fullScope;
    }
  });
  exports.alias = _emberCliPageObject.alias;
  exports.attribute = _emberCliPageObject.attribute;
  exports.clickOnText = _emberCliPageObject.clickOnText;
  exports.clickable = _emberCliPageObject.clickable;
  exports.collection = _emberCliPageObject.collection;
  exports.contains = _emberCliPageObject.contains;
  exports.count = _emberCliPageObject.count;
  exports.create = _emberCliPageObject.create;
  exports.fillable = _emberCliPageObject.fillable;
  exports.selectable = _emberCliPageObject.fillable;
  exports.hasClass = _emberCliPageObject.hasClass;
  exports.is = _emberCliPageObject.is;
  exports.isHidden = _emberCliPageObject.isHidden;
  exports.isVisible = _emberCliPageObject.isVisible;
  exports.notHasClass = _emberCliPageObject.notHasClass;
  exports.property = _emberCliPageObject.property;
  exports.text = _emberCliPageObject.text;
  exports.triggerable = _emberCliPageObject.triggerable;
  exports.value = _emberCliPageObject.value;
  exports.visitable = _emberCliPageObject.visitable;
  exports.default = {
    alias: _emberCliPageObject.alias,
    attribute: _emberCliPageObject.attribute,
    clickOnText: _emberCliPageObject.clickOnText,
    clickable: _emberCliPageObject.clickable,
    collection: _emberCliPageObject.collection,
    contains: _emberCliPageObject.contains,
    count: _emberCliPageObject.count,
    create: _emberCliPageObject.create,
    fillable: _emberCliPageObject.fillable,
    hasClass: _emberCliPageObject.hasClass,
    is: _emberCliPageObject.is,
    isHidden: _emberCliPageObject.isHidden,
    isVisible: _emberCliPageObject.isVisible,
    notHasClass: _emberCliPageObject.notHasClass,
    property: _emberCliPageObject.property,
    selectable: _emberCliPageObject.fillable,
    text: _emberCliPageObject.text,
    triggerable: _emberCliPageObject.triggerable,
    value: _emberCliPageObject.value,
    visitable: _emberCliPageObject.visitable
  };
});
define("dummy/tests/pages/components/_component", ["exports", "dummy/tests/page-object"], function (exports, _pageObject) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.jquery = jquery;
  exports.default = component;

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  // A helper to leverage jQuery for page component queries
  function jquery(callback) {
    var errorIfMissing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    return {
      isDescriptor: true,

      get: function get() {
        var $el = (0, _pageObject.findElement)(this);

        if (errorIfMissing && !$el.length) {
          throw new Error("Element " + this.scope + " not found.");
        }

        return callback($el);
      }
    };
  }

  function component() {
    var scope = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var descriptor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    // If a descriptor is passed as the first arg
    if (scope === Object(scope)) {
      descriptor = scope;
      scope = null;
    }

    return _extends({}, scope ? { scope: scope, itemScope: scope } : {}, { // inject the scope only if it was provided

      $: jquery(function ($el) {
        return $el;
      }),
      attr: jquery(function ($el) {
        return function (attrName) {
          return $el.attr(attrName);
        };
      }),
      click: (0, _pageObject.clickable)(),
      contains: jquery(function ($el) {
        return function (selector) {
          return $el.find(selector).length > 0;
        };
      }, false),
      empty: jquery(function ($el) {
        return $el.is(":empty") || !$el.children().length && !$el.text().trim().length;
      }),
      exists: jquery(function ($el) {
        return $el.length > 0;
      }, false), // false: don't spit an error if element isn't found
      index: jquery(function ($el) {
        return $el.index();
      }),
      hasClass: jquery(function ($el) {
        return function (className) {
          return $el.hasClass(className);
        };
      }),
      visible: (0, _pageObject.isVisible)(),
      text: (0, _pageObject.text)()

    }, descriptor);
  }
});
define('dummy/tests/pages/components/drag-sort-item', ['exports', 'dummy/tests/page-object', 'dummy/tests/pages/components/_component', 'ember-drag-sort/utils/trigger'], function (exports, _pageObject, _component, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = (0, _component.default)({
    draggable: (0, _pageObject.attribute)('draggable'),

    isDragged: (0, _pageObject.hasClass)('-isDragged'),
    isDraggingOver: (0, _pageObject.hasClass)('-isDraggingOver'),
    placeholderAbove: (0, _pageObject.hasClass)('-placeholderAbove'),
    placeholderBelow: (0, _pageObject.hasClass)('-placeholderBelow'),

    dragStart: function dragStart(index) {
      (0, _trigger.default)(this.$, 'dragstart');
    },
    dragOver: function dragOver(above) {
      (0, _trigger.default)(this.$, 'dragover', above);
    },
    dragEnd: function dragEnd() {
      (0, _trigger.default)(this.$, 'dragend');
    }
  });
});
define('dummy/tests/pages/components/drag-sort-list', ['exports', 'dummy/tests/pages/components/_component', 'dummy/tests/pages/components/drag-sort-item', 'ember-drag-sort/utils/trigger', 'ember-cli-page-object'], function (exports, _component, _dragSortItem, _trigger, _emberCliPageObject) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.dragSortList = dragSortList;

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function dragSortList() {
    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return (0, _component.default)({
      items: (0, _emberCliPageObject.collection)({
        itemScope: '> .dragSortItem',
        item: _extends({}, _dragSortItem.default, {
          content: content
        })
      }),

      draggingEnabled: (0, _emberCliPageObject.hasClass)('-draggingEnabled'),
      isDragging: (0, _emberCliPageObject.hasClass)('-isDragging'),
      isDraggingOver: (0, _emberCliPageObject.hasClass)('-isDraggingOver'),
      isEmpty: (0, _emberCliPageObject.hasClass)('-isEmpty'),
      isExpanded: (0, _emberCliPageObject.hasClass)('-isExpanded'),

      dragEnter: function dragEnter() {
        (0, _trigger.default)(this.$, 'dragenter');
      },
      sort: function sort(sourceIndex, targetIndex, above) {
        return (0, _trigger.sort)(this.$, sourceIndex, targetIndex, above);
      },
      move: function move(sourceIndex, targetList, targetIndex, above) {
        return (0, _trigger.move)(this.$, sourceIndex, targetList.$, targetIndex, above);
      }
    });
  }

  exports.default = dragSortList();
});
define('dummy/tests/pages/index', ['exports', 'ember-cli-page-object', 'dummy/tests/pages/components/drag-sort-list'], function (exports, _emberCliPageObject, _dragSortList) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = (0, _emberCliPageObject.create)({
    visit: (0, _emberCliPageObject.visitable)('/'),
    listGroups: (0, _emberCliPageObject.collection)({
      scope: '.list-groups',
      itemScope: '.list-group',
      item: {
        lists: (0, _emberCliPageObject.collection)({
          itemScope: '.dragSortList',
          item: (0, _dragSortList.dragSortList)({
            title: (0, _emberCliPageObject.text)()
          })
        })
      }
    })
  });
});
define('dummy/tests/pages/index.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint - pages/index.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pages/index.js should pass ESLint.\n');
  });
});
define('dummy/tests/resolver.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint - resolver.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint.\n');
  });
});
define('dummy/tests/router.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint - router.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint.\n');
  });
});
define('dummy/tests/test-helper', ['dummy/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('dummy/tests/test-helper.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint - test-helper.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint.\n');
  });
});
require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
