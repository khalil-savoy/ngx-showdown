import { Injectable, Optional } from '@angular/core';
import * as Showdown from 'showdown';
import * as i0 from "@angular/core";
import * as i1 from "./showdown-config.provider";
/**
 * @internal
 */
let { hasOwnProperty } = {};
/**
 * ### Example
 *
 * Setup as standalone
 * ```typescript
 * import { NgModule } from '@angular/core';
 * import { ShowdownConverter } from 'ngx-showdown';
 *
 * @NgModule({
 *   providers: [ ShowdownConverter ];
 * })
 * export class AppModule {}
 * ```
 *
 * Use the converter instance.
 * ```typescript
 * import { Injectable } from '@angular/core';
 * import { ShowdownConverter } from 'ngx-showdown';
 *
 * @Injectable()
 * export class SomeService {
 *   constructor(showdownConverter: ShowdownConverter) {
 *     let markdown: string = "**Some**";
 *     let html: string = showdownConverter.makeHtml(markdown);
 *     console.log(`some:\nmarkdown: ${markdown)\nhtml: ${html}\n`);
 *   }
 * }
 * ```
 */
export class ShowdownConverter extends Showdown.Converter {
    constructor(config) {
        super(config && { extensions: config.extensions });
        this.setFlavor((config && config.flavor) || 'vanilla');
        this.setOptions(config);
    }
    /**
     * Set options to the converter.
     *
     * @param options - A options object to set.
     */
    setOptions(options) {
        for (let key in options) {
            if (hasOwnProperty.call(options, key)) {
                this.setOption(key, options[key]);
            }
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ShowdownConverter, deps: [{ token: i1.ShowdownConfig, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ShowdownConverter });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ShowdownConverter, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.ShowdownConfig, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd2Rvd24tY29udmVydGVyLnByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Nob3dkb3duLWNvbnZlcnRlci5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEtBQUssUUFBUSxNQUFNLFVBQVUsQ0FBQzs7O0FBR3JDOztHQUVHO0FBQ0gsSUFBSSxFQUFDLGNBQWMsRUFBQyxHQUFHLEVBQUUsQ0FBQztBQUUxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRCRztBQUVILE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxRQUFRLENBQUMsU0FBUztJQUV2RCxZQUF3QixNQUF1QjtRQUM3QyxLQUFLLENBQUMsTUFBTSxJQUFJLEVBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxVQUFVLEVBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxVQUFVLENBQUMsT0FBaUM7UUFDakQsS0FBSyxJQUFJLEdBQUcsSUFBSSxPQUFPLEVBQUU7WUFDdkIsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsRUFBRTtnQkFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDbkM7U0FDRjtJQUNILENBQUM7dUdBbkJVLGlCQUFpQjsyR0FBakIsaUJBQWlCOzsyRkFBakIsaUJBQWlCO2tCQUQ3QixVQUFVOzswQkFHSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIFNob3dkb3duIGZyb20gJ3Nob3dkb3duJztcbmltcG9ydCB7IFNob3dkb3duQ29uZmlnIH0gZnJvbSAnLi9zaG93ZG93bi1jb25maWcucHJvdmlkZXInO1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5sZXQge2hhc093blByb3BlcnR5fSA9IHt9O1xuXG4vKipcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogU2V0dXAgYXMgc3RhbmRhbG9uZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbiAqIGltcG9ydCB7IFNob3dkb3duQ29udmVydGVyIH0gZnJvbSAnbmd4LXNob3dkb3duJztcbiAqXG4gKiBATmdNb2R1bGUoe1xuICogICBwcm92aWRlcnM6IFsgU2hvd2Rvd25Db252ZXJ0ZXIgXTtcbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XG4gKiBgYGBcbiAqXG4gKiBVc2UgdGhlIGNvbnZlcnRlciBpbnN0YW5jZS5cbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbiAqIGltcG9ydCB7IFNob3dkb3duQ29udmVydGVyIH0gZnJvbSAnbmd4LXNob3dkb3duJztcbiAqXG4gKiBASW5qZWN0YWJsZSgpXG4gKiBleHBvcnQgY2xhc3MgU29tZVNlcnZpY2Uge1xuICogICBjb25zdHJ1Y3RvcihzaG93ZG93bkNvbnZlcnRlcjogU2hvd2Rvd25Db252ZXJ0ZXIpIHtcbiAqICAgICBsZXQgbWFya2Rvd246IHN0cmluZyA9IFwiKipTb21lKipcIjtcbiAqICAgICBsZXQgaHRtbDogc3RyaW5nID0gc2hvd2Rvd25Db252ZXJ0ZXIubWFrZUh0bWwobWFya2Rvd24pO1xuICogICAgIGNvbnNvbGUubG9nKGBzb21lOlxcbm1hcmtkb3duOiAke21hcmtkb3duKVxcbmh0bWw6ICR7aHRtbH1cXG5gKTtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaG93ZG93bkNvbnZlcnRlciBleHRlbmRzIFNob3dkb3duLkNvbnZlcnRlciB7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgY29uZmlnPzogU2hvd2Rvd25Db25maWcpIHtcbiAgICBzdXBlcihjb25maWcgJiYge2V4dGVuc2lvbnM6IGNvbmZpZy5leHRlbnNpb25zfSk7XG4gICAgdGhpcy5zZXRGbGF2b3IoKGNvbmZpZyAmJiBjb25maWcuZmxhdm9yKSB8fCAndmFuaWxsYScpO1xuICAgIHRoaXMuc2V0T3B0aW9ucyhjb25maWcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBvcHRpb25zIHRvIHRoZSBjb252ZXJ0ZXIuXG4gICAqXG4gICAqIEBwYXJhbSBvcHRpb25zIC0gQSBvcHRpb25zIG9iamVjdCB0byBzZXQuXG4gICAqL1xuICBwdWJsaWMgc2V0T3B0aW9ucyhvcHRpb25zOiBTaG93ZG93bi5TaG93ZG93bk9wdGlvbnMpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gb3B0aW9ucykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob3B0aW9ucywga2V5KSkge1xuICAgICAgICB0aGlzLnNldE9wdGlvbihrZXksIG9wdGlvbnNba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==