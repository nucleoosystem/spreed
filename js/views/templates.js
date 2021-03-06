(function() {
  var template = Handlebars.template, templates = OCA.Talk.Views.Templates = OCA.Talk.Views.Templates || {};
templates['callbutton'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<button class=\"leave-call primary\">"
    + container.escapeExpression(((helper = (helper = helpers.leaveCallText || (depth0 != null ? depth0.leaveCallText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"leaveCallText","hash":{},"data":data}) : helper)))
    + "</button>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.hasCall : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<button class=\"join-call call-ongoing primary\">"
    + container.escapeExpression(((helper = (helper = helpers.joinCallText || (depth0 != null ? depth0.joinCallText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"joinCallText","hash":{},"data":data}) : helper)))
    + "</button>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<button class=\"join-call primary\">"
    + container.escapeExpression(((helper = (helper = helpers.startCallText || (depth0 != null ? depth0.startCallText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"startCallText","hash":{},"data":data}) : helper)))
    + "</button>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.isInCall : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});
templates['chatview'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<ul class=\"comments\"></ul>\n<div class=\"emptycontent\">\n	<div class=\"icon-comment\"></div>\n	<p>"
    + container.escapeExpression(((helper = (helper = helpers.emptyResultLabel || (depth0 != null ? depth0.emptyResultLabel : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"emptyResultLabel","hash":{},"data":data}) : helper)))
    + "</p>\n</div>\n<div class=\"loading hidden\" style=\"height: 50px\"></div>\n";
},"useData":true});
templates['chatview_add_comment'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<div class=\"author\">"
    + container.escapeExpression(((helper = (helper = helpers.actorDisplayName || (depth0 != null ? depth0.actorDisplayName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"actorDisplayName","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "		<div class=\"guest-name\"></div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<button class=\"share icon-add has-tooltip\" title=\""
    + container.escapeExpression(((helper = (helper = helpers.shareText || (depth0 != null ? depth0.shareText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"shareText","hash":{},"data":data}) : helper)))
    + "\"></button>\n		<div class=\"shareLoading icon-loading-small hidden\"></div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"newCommentRow comment\">\n	<div class=\"authorRow currentUser\">\n		<div class=\"avatar\" data-user-id=\""
    + alias4(((helper = (helper = helpers.actorId || (depth0 != null ? depth0.actorId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"actorId","hash":{},"data":data}) : helper)))
    + "\"></div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.actorId : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "	</div>\n	<form class=\"newCommentForm\">\n		<div contentEditable=\"true\" class=\"message\" data-placeholder=\""
    + alias4(((helper = (helper = helpers.newMessagePlaceholder || (depth0 != null ? depth0.newMessagePlaceholder : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"newMessagePlaceholder","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"message","hash":{},"data":data}) : helper)))
    + "</div>\n		<input class=\"submit icon-confirm has-tooltip\" type=\"submit\" value=\"\" title=\""
    + alias4(((helper = (helper = helpers.submitText || (depth0 != null ? depth0.submitText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"submitText","hash":{},"data":data}) : helper)))
    + "\"/>\n		<div class=\"submitLoading icon-loading-small hidden\"></div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.actorId : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</form>\n</div>\n";
},"useData":true});
templates['chatview_comment'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"3":function(container,depth0,helpers,partials,data) {
    return " systemMessage";
},"5":function(container,depth0,helpers,partials,data) {
    return " currentUser";
},"7":function(container,depth0,helpers,partials,data) {
    return " guestUser";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<div class=\"avatar\" data-user-id=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isGuest : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + "\" data-user-display-name=\""
    + alias4(((helper = (helper = helpers.actorDisplayName || (depth0 != null ? depth0.actorDisplayName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"actorDisplayName","hash":{},"data":data}) : helper)))
    + "\"></div>\n		<div class=\"author\">"
    + alias4(((helper = (helper = helpers.actorDisplayName || (depth0 != null ? depth0.actorDisplayName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"actorDisplayName","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.actorId || (depth0 != null ? depth0.actorId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"actorId","hash":{},"data":data}) : helper)));
},"12":function(container,depth0,helpers,partials,data) {
    return " live-relative-timestamp";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li class=\"comment"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isNotSystemMessage : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n	<div class=\"authorRow"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isUserAuthor : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isGuest : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isNotSystemMessage : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		<div class=\"date has-tooltip"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.relativeDate : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-timestamp=\""
    + alias4(((helper = (helper = helpers.timestamp || (depth0 != null ? depth0.timestamp : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"timestamp","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + alias4(((helper = (helper = helpers.altDate || (depth0 != null ? depth0.altDate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"altDate","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n	<div class=\"message\">"
    + ((stack1 = ((helper = (helper = helpers.formattedMessage || (depth0 != null ? depth0.formattedMessage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"formattedMessage","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n</li>\n";
},"useData":true});
templates['richobjectstringparser_filepreview'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href=\""
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "\" class=\"filePreviewContainer\" target=\"_blank\" rel=\"noopener noreferrer\">\n	<span class=\"filePreview\" data-file-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"></span>\n	<strong>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</strong>\n</a>\n";
},"useData":true});
templates['richobjectstringparser_unknown'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<strong>"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "</strong>\n";
},"useData":true});
templates['richobjectstringparser_unknownlink'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href=\""
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "\" class=\"external\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</strong></a>\n";
},"useData":true});
templates['richobjectstringparser_userlocal'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "currentUser";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<span class=\"atwho-inserted\" contenteditable=\"false\">\n	<span class=\"mention-user avatar-name-wrapper "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isCurrentUser : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n		<span class=\"avatar\"\n				data-user-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"\n				data-user-display-name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n		</span>\n		<strong>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</strong>\n	</span>\n</span>\n";
},"useData":true});
})();