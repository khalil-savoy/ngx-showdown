import { Component, Input, Optional, SecurityContext } from '@angular/core';
import { ShowdownConverter } from './showdown-converter.provider';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "./showdown-config.provider";
/**
 * @internal
 */
const MAP_OPTION = {
    '': true,
    true: true,
    false: false
};
/**
 * @internal
 */
let _toOption = (value) => MAP_OPTION.hasOwnProperty(value) ? MAP_OPTION[value] : value;
/**
 * The options keys for the dynamic properties set.
 * @internal
 */
const OPTIONS_PROPERTIES_KEYS = [
    'backslashEscapesHTMLTags',
    'completeHTMLDocument',
    'disableForced4SpacesIndentedSublists',
    'emoji',
    'encodeEmails',
    'ghCodeBlocks',
    'ghCompatibleHeaderId',
    'ghMentions',
    'ghMentionsLink',
    'headerLevelStart',
    'literalMidWordAsterisks',
    'literalMidWordUnderscores',
    'metadata',
    'noHeaderId',
    'omitExtraWLInCodeBlocks',
    'openLinksInNewWindow',
    'parseImgDimensions',
    'prefixHeaderId',
    'rawHeaderId',
    'rawPrefixHeaderId',
    'requireSpaceBeforeHeadingText',
    'simpleLineBreaks',
    'simplifiedAutoLink',
    'smartIndentationFix',
    'smoothLivePreview',
    'splitAdjacentBlockquotes',
    'strikethrough',
    'tables',
    'tablesHeaderId',
    'tasklists',
    'underline'
];
/**
 * A angular component for render `Markdown` to `HTML`.
 *
 * ### Example
 *
 * Setup as standalone
 * ```typescript
 * import { NgModule } from '@angular/core';
 * import { ShowdownComponent } from 'ngx-showdown';
 *
 * @NgModule({
 *   declarations: [ ShowdownComponent ];
 * })
 * export class AppModule {}
 * ```
 *
 * Bind markdown value and options object
 * ```typescript
 * import { Component } from '@angular/core';
 * import * as Showdown from 'showdown';
 *
 * @Component({
 *   selector: 'some',
 *   template: '<showdown [value]="text" [options]="options"></showdown>'
 * })
 * export class SomeComponent {
 *   text: string = `
 *     # Some header
 *     ---
 *     **Some bold**
 *   `;
 *   options: Showdown.ShowdownOptions = { smartIndentationFix: true };
 *   // ...
 * }
 * ```
 * Bind single option (it have properties for all showdown options).
 * ```html
 * <showdown emoji="true"  noHeaderId># Some text :+1:</showdown>
 * ```
 *
 * Set static markdown value.
 * ```html
 * <showdown value="___Some static value___" underline></showdown>
 * ```
 *
 * Use as directive on anther element.
 * ```html
 * <div showdown="# Div Element" headerLevelStart="2"></div>
 * ```
 *
 * Static markdown value in the element content.
 * ```html
 * <div>
 *    <showdown smartIndentationFix>
 *       # List:
 *       * a
 *            * A
 *       * b
 *    </showdown>
 * </div>
 * ```
 *
 * Set template reference variable.
 * ```html
 * <showdown #sd></showdown>
 * ```
 * Or
 * ```html
 * <div showdown #sd="showdown"></div>
 * ```
 */
export class ShowdownComponent extends ShowdownConverter {
    _elementRef;
    _domSanitizer;
    /**
     * The input markdown value.
     *
     * __Example :__
     *
     * Set some static markdown value.
     * ```html
     * <showdown value="**Some bold value**"></showdown>
     * ```
     *
     * Bind property with markdown value.
     * ```html
     * <textarea [(ngModel)]="text"></textarea>
     * <showdown [value]="text"></showdown>
     * ```
     */
    value;
    /**
     * Input alias to `value`.
     *
     * __Example :__
     *
     * ```html
     * <div [showdown]="# Some Header"></div>
     * ```
     *
     * Equivalent to
     * ```html
     * <showdown [value]="# Some Header"></showdown>
     * ```
     */
    set showdown(value) {
        this.value = value;
    }
    /**
     * The showdown options of the converter.
     *
     * __Example :__
     *
     * Bind options
     * ```typescript
     * import { Component } from '@angular/core';
     * import * as Showdown from 'showdown';
     *
     * @Component({
     *   selector: `some`,
     *   template: `<showdown [options]="options"># Some Header<showdown>`
     * })
     * export class SomeComponent {
     *   options: Showdown.ShowdownOptions = {headerLevelStart: 3};
     *   // ...
     * }
     * ```
     * Or
     * ```html
     * <showdown [options]="{smartIndentationFix: true}"> # Indentation Fix<showdown>
     * ```
     */
    get options() {
        return this.getOptions();
    }
    set options(options) {
        this.setOptions(options);
    }
    _sanitize;
    /**
     * Enables html sanitize, it will sanitize the converter html output by [`DomSanitizer`](https://angular.io/api/platform-browser/DomSanitizer#sanitize).
     *
     * __Example :__
     *
     * ```typescript
     * import { Component } from '@angular/core';
     *
     * @Component({
     *   selector: 'some',
     *   styles: [`.box { width: 95%; padding: 5px; border: 1px solid black;}`],
     *   template: `
     *     <h3>Input</h3>
     *     <textarea class="box" [(ngModel)]="text"></textarea>
     *     <input type="checkbox" [(ngModel)]="sanitize"/> <b>Sanitize</b>
     *     <h3>Markdown</h3>
     *     <pre class="box"><code>{{ text }}</code></pre>
     *     <h3>Preview</h3>
     *     <div class="box">
     *       <showdown #sd [value]="text" [sanitize]="sanitize"></showdown>
     *     </div>
     *   `;
     * })
     * export class SomeComponent {
     *    text: string = `# A cool link
     * <a href="javascript:alert('Hello!')">click me</a>`;
     * }
     * ```
     */
    set sanitize(sanitize) {
        this._sanitize = _toOption(sanitize);
    }
    constructor(_elementRef, _domSanitizer, config) {
        super(config);
        this._elementRef = _elementRef;
        this._domSanitizer = _domSanitizer;
    }
    /**
     * A angular lifecycle method, Use on init to check if it `content` type and load the element `content` to `value`.
     * @internal
     */
    ngOnInit() {
        if (this.value === undefined && this._elementRef.nativeElement.innerHTML.trim() !== '') {
            this.render(this._elementRef.nativeElement.innerHTML);
        }
    }
    /**
     * A angular lifecycle method, Use to call to render method after changes.
     * @internal
     */
    ngOnChanges() {
        this.render();
    }
    /**
     * Convert the markdown value of {@link ShowdownComponent#value} to html and set the html result to the element content.
     *
     * __Example :__
     *
     * ```html
     * <textarea #textarea (change)="showdown.render(textarea.value)"/># Some Header</textarea>
     * <showdown #showdown></showdown>
     * ```
     * @param value - A markdown value to render (it will override the current value of `ShowdownComponent#value`)
     */
    render(value) {
        if (typeof value === 'string') {
            this.value = value;
        }
        if (typeof this.value === 'string') {
            let result = this.makeHtml(this.value);
            if (this._sanitize) {
                result = this._domSanitizer.sanitize(SecurityContext.HTML, result);
            }
            this._elementRef.nativeElement.innerHTML = result;
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ShowdownComponent, deps: [{ token: i0.ElementRef }, { token: i1.DomSanitizer, optional: true }, { token: i2.ShowdownConfig, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.2", type: ShowdownComponent, selector: "showdown,[showdown]", inputs: { backslashEscapesHTMLTags: "backslashEscapesHTMLTags", completeHTMLDocument: "completeHTMLDocument", disableForced4SpacesIndentedSublists: "disableForced4SpacesIndentedSublists", emoji: "emoji", encodeEmails: "encodeEmails", ghCodeBlocks: "ghCodeBlocks", ghCompatibleHeaderId: "ghCompatibleHeaderId", ghMentions: "ghMentions", ghMentionsLink: "ghMentionsLink", headerLevelStart: "headerLevelStart", literalMidWordAsterisks: "literalMidWordAsterisks", literalMidWordUnderscores: "literalMidWordUnderscores", metadata: "metadata", noHeaderId: "noHeaderId", omitExtraWLInCodeBlocks: "omitExtraWLInCodeBlocks", openLinksInNewWindow: "openLinksInNewWindow", parseImgDimensions: "parseImgDimensions", prefixHeaderId: "prefixHeaderId", rawHeaderId: "rawHeaderId", rawPrefixHeaderId: "rawPrefixHeaderId", requireSpaceBeforeHeadingText: "requireSpaceBeforeHeadingText", simpleLineBreaks: "simpleLineBreaks", simplifiedAutoLink: "simplifiedAutoLink", smartIndentationFix: "smartIndentationFix", smoothLivePreview: "smoothLivePreview", splitAdjacentBlockquotes: "splitAdjacentBlockquotes", strikethrough: "strikethrough", tables: "tables", tablesHeaderId: "tablesHeaderId", tasklists: "tasklists", underline: "underline", value: "value", showdown: "showdown", options: "options", sanitize: "sanitize" }, exportAs: ["showdown"], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: '<ng-content></ng-content>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ShowdownComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'showdown,[showdown]',
                    template: '<ng-content></ng-content>',
                    exportAs: 'showdown',
                    inputs: OPTIONS_PROPERTIES_KEYS
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.DomSanitizer, decorators: [{
                    type: Optional
                }] }, { type: i2.ShowdownConfig, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { value: [{
                type: Input
            }], showdown: [{
                type: Input
            }], options: [{
                type: Input
            }], sanitize: [{
                type: Input
            }] } });
// Define options properties setter for angular directive and direct access
for (let key of OPTIONS_PROPERTIES_KEYS) {
    Object.defineProperty(ShowdownComponent.prototype, key, {
        set(value) {
            this.setOption(key, _toOption(value));
        },
        configurable: true
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd2Rvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Nob3dkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBcUIsUUFBUSxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzRyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7OztBQUVsRTs7R0FFRztBQUNILE1BQU0sVUFBVSxHQUFHO0lBQ2pCLEVBQUUsRUFBRSxJQUFJO0lBQ1IsSUFBSSxFQUFFLElBQUk7SUFDVixLQUFLLEVBQUUsS0FBSztDQUNiLENBQUM7QUFFRjs7R0FFRztBQUNILElBQUksU0FBUyxHQUFHLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUU3Rjs7O0dBR0c7QUFDSCxNQUFNLHVCQUF1QixHQUFhO0lBQ3hDLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIsc0NBQXNDO0lBQ3RDLE9BQU87SUFDUCxjQUFjO0lBQ2QsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLFVBQVU7SUFDVixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsV0FBVztJQUNY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QUFpQixDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUU7UUFDdEQsR0FBRyxDQUFDLEtBQVU7WUFDWixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBQ0QsWUFBWSxFQUFFLElBQUk7S0FDbkIsQ0FBQyxDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3B0aW9uYWwsIFNlY3VyaXR5Q29udGV4dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgKiBhcyBTaG93ZG93biBmcm9tICdzaG93ZG93bic7XG5pbXBvcnQgeyBTaG93ZG93bkNvbmZpZyB9IGZyb20gJy4vc2hvd2Rvd24tY29uZmlnLnByb3ZpZGVyJztcbmltcG9ydCB7IFNob3dkb3duQ29udmVydGVyIH0gZnJvbSAnLi9zaG93ZG93bi1jb252ZXJ0ZXIucHJvdmlkZXInO1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5jb25zdCBNQVBfT1BUSU9OID0ge1xuICAnJzogdHJ1ZSxcbiAgdHJ1ZTogdHJ1ZSxcbiAgZmFsc2U6IGZhbHNlXG59O1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5sZXQgX3RvT3B0aW9uID0gKHZhbHVlOiBhbnkpID0+IE1BUF9PUFRJT04uaGFzT3duUHJvcGVydHkodmFsdWUpID8gTUFQX09QVElPTlt2YWx1ZV0gOiB2YWx1ZTtcblxuLyoqXG4gKiBUaGUgb3B0aW9ucyBrZXlzIGZvciB0aGUgZHluYW1pYyBwcm9wZXJ0aWVzIHNldC5cbiAqIEBpbnRlcm5hbFxuICovXG5jb25zdCBPUFRJT05TX1BST1BFUlRJRVNfS0VZUzogc3RyaW5nW10gPSBbXG4gICdiYWNrc2xhc2hFc2NhcGVzSFRNTFRhZ3MnLFxuICAnY29tcGxldGVIVE1MRG9jdW1lbnQnLFxuICAnZGlzYWJsZUZvcmNlZDRTcGFjZXNJbmRlbnRlZFN1Ymxpc3RzJyxcbiAgJ2Vtb2ppJyxcbiAgJ2VuY29kZUVtYWlscycsXG4gICdnaENvZGVCbG9ja3MnLFxuICAnZ2hDb21wYXRpYmxlSGVhZGVySWQnLFxuICAnZ2hNZW50aW9ucycsXG4gICdnaE1lbnRpb25zTGluaycsXG4gICdoZWFkZXJMZXZlbFN0YXJ0JyxcbiAgJ2xpdGVyYWxNaWRXb3JkQXN0ZXJpc2tzJyxcbiAgJ2xpdGVyYWxNaWRXb3JkVW5kZXJzY29yZXMnLFxuICAnbWV0YWRhdGEnLFxuICAnbm9IZWFkZXJJZCcsXG4gICdvbWl0RXh0cmFXTEluQ29kZUJsb2NrcycsXG4gICdvcGVuTGlua3NJbk5ld1dpbmRvdycsXG4gICdwYXJzZUltZ0RpbWVuc2lvbnMnLFxuICAncHJlZml4SGVhZGVySWQnLFxuICAncmF3SGVhZGVySWQnLFxuICAncmF3UHJlZml4SGVhZGVySWQnLFxuICAncmVxdWlyZVNwYWNlQmVmb3JlSGVhZGluZ1RleHQnLFxuICAnc2ltcGxlTGluZUJyZWFrcycsXG4gICdzaW1wbGlmaWVkQXV0b0xpbmsnLFxuICAnc21hcnRJbmRlbnRhdGlvbkZpeCcsXG4gICdzbW9vdGhMaXZlUHJldmlldycsXG4gICdzcGxpdEFkamFjZW50QmxvY2txdW90ZXMnLFxuICAnc3RyaWtldGhyb3VnaCcsXG4gICd0YWJsZXMnLFxuICAndGFibGVzSGVhZGVySWQnLFxuICAndGFza2xpc3RzJyxcbiAgJ3VuZGVybGluZSdcbl07XG5cbi8vIEZvciB0aGUgb3B0aW9ucyBzZXR0ZXIgcHJvcGVydGllcyB0aGF0IGR5bmFtaWMgZGVmaW5pdGlvbiAodGhlIGNvZGUgYWZ0ZXIgdGhlIGNsYXNzKVxuZXhwb3J0IGludGVyZmFjZSBTaG93ZG93bkNvbXBvbmVudCBleHRlbmRzIFNob3dkb3duLlNob3dkb3duT3B0aW9ucyB7XG59XG5cbi8qKlxuICogQSBhbmd1bGFyIGNvbXBvbmVudCBmb3IgcmVuZGVyIGBNYXJrZG93bmAgdG8gYEhUTUxgLlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogU2V0dXAgYXMgc3RhbmRhbG9uZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbiAqIGltcG9ydCB7IFNob3dkb3duQ29tcG9uZW50IH0gZnJvbSAnbmd4LXNob3dkb3duJztcbiAqXG4gKiBATmdNb2R1bGUoe1xuICogICBkZWNsYXJhdGlvbnM6IFsgU2hvd2Rvd25Db21wb25lbnQgXTtcbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XG4gKiBgYGBcbiAqXG4gKiBCaW5kIG1hcmtkb3duIHZhbHVlIGFuZCBvcHRpb25zIG9iamVjdFxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4gKiBpbXBvcnQgKiBhcyBTaG93ZG93biBmcm9tICdzaG93ZG93bic7XG4gKlxuICogQENvbXBvbmVudCh7XG4gKiAgIHNlbGVjdG9yOiAnc29tZScsXG4gKiAgIHRlbXBsYXRlOiAnPHNob3dkb3duIFt2YWx1ZV09XCJ0ZXh0XCIgW29wdGlvbnNdPVwib3B0aW9uc1wiPjwvc2hvd2Rvd24+J1xuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBTb21lQ29tcG9uZW50IHtcbiAqICAgdGV4dDogc3RyaW5nID0gYFxuICogICAgICMgU29tZSBoZWFkZXJcbiAqICAgICAtLS1cbiAqICAgICAqKlNvbWUgYm9sZCoqXG4gKiAgIGA7XG4gKiAgIG9wdGlvbnM6IFNob3dkb3duLlNob3dkb3duT3B0aW9ucyA9IHsgc21hcnRJbmRlbnRhdGlvbkZpeDogdHJ1ZSB9O1xuICogICAvLyAuLi5cbiAqIH1cbiAqIGBgYFxuICogQmluZCBzaW5nbGUgb3B0aW9uIChpdCBoYXZlIHByb3BlcnRpZXMgZm9yIGFsbCBzaG93ZG93biBvcHRpb25zKS5cbiAqIGBgYGh0bWxcbiAqIDxzaG93ZG93biBlbW9qaT1cInRydWVcIiAgbm9IZWFkZXJJZD4jIFNvbWUgdGV4dCA6KzE6PC9zaG93ZG93bj5cbiAqIGBgYFxuICpcbiAqIFNldCBzdGF0aWMgbWFya2Rvd24gdmFsdWUuXG4gKiBgYGBodG1sXG4gKiA8c2hvd2Rvd24gdmFsdWU9XCJfX19Tb21lIHN0YXRpYyB2YWx1ZV9fX1wiIHVuZGVybGluZT48L3Nob3dkb3duPlxuICogYGBgXG4gKlxuICogVXNlIGFzIGRpcmVjdGl2ZSBvbiBhbnRoZXIgZWxlbWVudC5cbiAqIGBgYGh0bWxcbiAqIDxkaXYgc2hvd2Rvd249XCIjIERpdiBFbGVtZW50XCIgaGVhZGVyTGV2ZWxTdGFydD1cIjJcIj48L2Rpdj5cbiAqIGBgYFxuICpcbiAqIFN0YXRpYyBtYXJrZG93biB2YWx1ZSBpbiB0aGUgZWxlbWVudCBjb250ZW50LlxuICogYGBgaHRtbFxuICogPGRpdj5cbiAqICAgIDxzaG93ZG93biBzbWFydEluZGVudGF0aW9uRml4PlxuICogICAgICAgIyBMaXN0OlxuICogICAgICAgKiBhXG4gKiAgICAgICAgICAgICogQVxuICogICAgICAgKiBiXG4gKiAgICA8L3Nob3dkb3duPlxuICogPC9kaXY+XG4gKiBgYGBcbiAqXG4gKiBTZXQgdGVtcGxhdGUgcmVmZXJlbmNlIHZhcmlhYmxlLlxuICogYGBgaHRtbFxuICogPHNob3dkb3duICNzZD48L3Nob3dkb3duPlxuICogYGBgXG4gKiBPclxuICogYGBgaHRtbFxuICogPGRpdiBzaG93ZG93biAjc2Q9XCJzaG93ZG93blwiPjwvZGl2PlxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Nob3dkb3duLFtzaG93ZG93bl0nLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBleHBvcnRBczogJ3Nob3dkb3duJyxcbiAgaW5wdXRzOiBPUFRJT05TX1BST1BFUlRJRVNfS0VZU1xufSlcbmV4cG9ydCBjbGFzcyBTaG93ZG93bkNvbXBvbmVudCBleHRlbmRzIFNob3dkb3duQ29udmVydGVyIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIFNob3dkb3duLlNob3dkb3duT3B0aW9ucyB7XG5cbiAgLyoqXG4gICAqIFRoZSBpbnB1dCBtYXJrZG93biB2YWx1ZS5cbiAgICpcbiAgICogX19FeGFtcGxlIDpfX1xuICAgKlxuICAgKiBTZXQgc29tZSBzdGF0aWMgbWFya2Rvd24gdmFsdWUuXG4gICAqIGBgYGh0bWxcbiAgICogPHNob3dkb3duIHZhbHVlPVwiKipTb21lIGJvbGQgdmFsdWUqKlwiPjwvc2hvd2Rvd24+XG4gICAqIGBgYFxuICAgKlxuICAgKiBCaW5kIHByb3BlcnR5IHdpdGggbWFya2Rvd24gdmFsdWUuXG4gICAqIGBgYGh0bWxcbiAgICogPHRleHRhcmVhIFsobmdNb2RlbCldPVwidGV4dFwiPjwvdGV4dGFyZWE+XG4gICAqIDxzaG93ZG93biBbdmFsdWVdPVwidGV4dFwiPjwvc2hvd2Rvd24+XG4gICAqIGBgYFxuICAgKi9cbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZztcblxuICAvKipcbiAgICogSW5wdXQgYWxpYXMgdG8gYHZhbHVlYC5cbiAgICpcbiAgICogX19FeGFtcGxlIDpfX1xuICAgKlxuICAgKiBgYGBodG1sXG4gICAqIDxkaXYgW3Nob3dkb3duXT1cIiMgU29tZSBIZWFkZXJcIj48L2Rpdj5cbiAgICogYGBgXG4gICAqXG4gICAqIEVxdWl2YWxlbnQgdG9cbiAgICogYGBgaHRtbFxuICAgKiA8c2hvd2Rvd24gW3ZhbHVlXT1cIiMgU29tZSBIZWFkZXJcIj48L3Nob3dkb3duPlxuICAgKiBgYGBcbiAgICovXG4gIEBJbnB1dCgpIHNldCBzaG93ZG93bih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBzaG93ZG93biBvcHRpb25zIG9mIHRoZSBjb252ZXJ0ZXIuXG4gICAqXG4gICAqIF9fRXhhbXBsZSA6X19cbiAgICpcbiAgICogQmluZCBvcHRpb25zXG4gICAqIGBgYHR5cGVzY3JpcHRcbiAgICogaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4gICAqIGltcG9ydCAqIGFzIFNob3dkb3duIGZyb20gJ3Nob3dkb3duJztcbiAgICpcbiAgICogQENvbXBvbmVudCh7XG4gICAqICAgc2VsZWN0b3I6IGBzb21lYCxcbiAgICogICB0ZW1wbGF0ZTogYDxzaG93ZG93biBbb3B0aW9uc109XCJvcHRpb25zXCI+IyBTb21lIEhlYWRlcjxzaG93ZG93bj5gXG4gICAqIH0pXG4gICAqIGV4cG9ydCBjbGFzcyBTb21lQ29tcG9uZW50IHtcbiAgICogICBvcHRpb25zOiBTaG93ZG93bi5TaG93ZG93bk9wdGlvbnMgPSB7aGVhZGVyTGV2ZWxTdGFydDogM307XG4gICAqICAgLy8gLi4uXG4gICAqIH1cbiAgICogYGBgXG4gICAqIE9yXG4gICAqIGBgYGh0bWxcbiAgICogPHNob3dkb3duIFtvcHRpb25zXT1cIntzbWFydEluZGVudGF0aW9uRml4OiB0cnVlfVwiPiAjIEluZGVudGF0aW9uIEZpeDxzaG93ZG93bj5cbiAgICogYGBgXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgb3B0aW9ucygpOiBTaG93ZG93bi5TaG93ZG93bk9wdGlvbnMge1xuICAgIHJldHVybiB0aGlzLmdldE9wdGlvbnMoKTtcbiAgfVxuXG4gIHNldCBvcHRpb25zKG9wdGlvbnM6IFNob3dkb3duLlNob3dkb3duT3B0aW9ucykge1xuICAgIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgfVxuXG4gIHByaXZhdGUgX3Nhbml0aXplOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBFbmFibGVzIGh0bWwgc2FuaXRpemUsIGl0IHdpbGwgc2FuaXRpemUgdGhlIGNvbnZlcnRlciBodG1sIG91dHB1dCBieSBbYERvbVNhbml0aXplcmBdKGh0dHBzOi8vYW5ndWxhci5pby9hcGkvcGxhdGZvcm0tYnJvd3Nlci9Eb21TYW5pdGl6ZXIjc2FuaXRpemUpLlxuICAgKlxuICAgKiBfX0V4YW1wbGUgOl9fXG4gICAqXG4gICAqIGBgYHR5cGVzY3JpcHRcbiAgICogaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4gICAqXG4gICAqIEBDb21wb25lbnQoe1xuICAgKiAgIHNlbGVjdG9yOiAnc29tZScsXG4gICAqICAgc3R5bGVzOiBbYC5ib3ggeyB3aWR0aDogOTUlOyBwYWRkaW5nOiA1cHg7IGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO31gXSxcbiAgICogICB0ZW1wbGF0ZTogYFxuICAgKiAgICAgPGgzPklucHV0PC9oMz5cbiAgICogICAgIDx0ZXh0YXJlYSBjbGFzcz1cImJveFwiIFsobmdNb2RlbCldPVwidGV4dFwiPjwvdGV4dGFyZWE+XG4gICAqICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgWyhuZ01vZGVsKV09XCJzYW5pdGl6ZVwiLz4gPGI+U2FuaXRpemU8L2I+XG4gICAqICAgICA8aDM+TWFya2Rvd248L2gzPlxuICAgKiAgICAgPHByZSBjbGFzcz1cImJveFwiPjxjb2RlPnt7IHRleHQgfX08L2NvZGU+PC9wcmU+XG4gICAqICAgICA8aDM+UHJldmlldzwvaDM+XG4gICAqICAgICA8ZGl2IGNsYXNzPVwiYm94XCI+XG4gICAqICAgICAgIDxzaG93ZG93biAjc2QgW3ZhbHVlXT1cInRleHRcIiBbc2FuaXRpemVdPVwic2FuaXRpemVcIj48L3Nob3dkb3duPlxuICAgKiAgICAgPC9kaXY+XG4gICAqICAgYDtcbiAgICogfSlcbiAgICogZXhwb3J0IGNsYXNzIFNvbWVDb21wb25lbnQge1xuICAgKiAgICB0ZXh0OiBzdHJpbmcgPSBgIyBBIGNvb2wgbGlua1xuICAgKiA8YSBocmVmPVwiamF2YXNjcmlwdDphbGVydCgnSGVsbG8hJylcIj5jbGljayBtZTwvYT5gO1xuICAgKiB9XG4gICAqIGBgYFxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IHNhbml0aXplKHNhbml0aXplOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2FuaXRpemUgPSBfdG9PcHRpb24oc2FuaXRpemUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfZG9tU2FuaXRpemVyPzogRG9tU2FuaXRpemVyLCBAT3B0aW9uYWwoKSBjb25maWc/OiBTaG93ZG93bkNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxuICAvKipcbiAgICogQSBhbmd1bGFyIGxpZmVjeWNsZSBtZXRob2QsIFVzZSBvbiBpbml0IHRvIGNoZWNrIGlmIGl0IGBjb250ZW50YCB0eXBlIGFuZCBsb2FkIHRoZSBlbGVtZW50IGBjb250ZW50YCB0byBgdmFsdWVgLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZhbHVlID09PSB1bmRlZmluZWQgJiYgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmlubmVySFRNTC50cmltKCkgIT09ICcnKSB7XG4gICAgICB0aGlzLnJlbmRlcih0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQSBhbmd1bGFyIGxpZmVjeWNsZSBtZXRob2QsIFVzZSB0byBjYWxsIHRvIHJlbmRlciBtZXRob2QgYWZ0ZXIgY2hhbmdlcy5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgdGhlIG1hcmtkb3duIHZhbHVlIG9mIHtAbGluayBTaG93ZG93bkNvbXBvbmVudCN2YWx1ZX0gdG8gaHRtbCBhbmQgc2V0IHRoZSBodG1sIHJlc3VsdCB0byB0aGUgZWxlbWVudCBjb250ZW50LlxuICAgKlxuICAgKiBfX0V4YW1wbGUgOl9fXG4gICAqXG4gICAqIGBgYGh0bWxcbiAgICogPHRleHRhcmVhICN0ZXh0YXJlYSAoY2hhbmdlKT1cInNob3dkb3duLnJlbmRlcih0ZXh0YXJlYS52YWx1ZSlcIi8+IyBTb21lIEhlYWRlcjwvdGV4dGFyZWE+XG4gICAqIDxzaG93ZG93biAjc2hvd2Rvd24+PC9zaG93ZG93bj5cbiAgICogYGBgXG4gICAqIEBwYXJhbSB2YWx1ZSAtIEEgbWFya2Rvd24gdmFsdWUgdG8gcmVuZGVyIChpdCB3aWxsIG92ZXJyaWRlIHRoZSBjdXJyZW50IHZhbHVlIG9mIGBTaG93ZG93bkNvbXBvbmVudCN2YWx1ZWApXG4gICAqL1xuICBwdWJsaWMgcmVuZGVyKHZhbHVlPzogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRoaXMudmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsZXQgcmVzdWx0ID0gdGhpcy5tYWtlSHRtbCh0aGlzLnZhbHVlKTtcblxuICAgICAgaWYgKHRoaXMuX3Nhbml0aXplKSB7XG4gICAgICAgIHJlc3VsdCA9IHRoaXMuX2RvbVNhbml0aXplci5zYW5pdGl6ZShTZWN1cml0eUNvbnRleHQuSFRNTCwgcmVzdWx0KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9IHJlc3VsdDtcbiAgICB9XG4gIH1cblxufVxuXG4vLyBEZWZpbmUgb3B0aW9ucyBwcm9wZXJ0aWVzIHNldHRlciBmb3IgYW5ndWxhciBkaXJlY3RpdmUgYW5kIGRpcmVjdCBhY2Nlc3NcbmZvciAobGV0IGtleSBvZiBPUFRJT05TX1BST1BFUlRJRVNfS0VZUykge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2hvd2Rvd25Db21wb25lbnQucHJvdG90eXBlLCBrZXksIHtcbiAgICBzZXQodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5zZXRPcHRpb24oa2V5LCBfdG9PcHRpb24odmFsdWUpKTtcbiAgICB9LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cbiJdfQ==