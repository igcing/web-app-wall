
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'pathResolver' })
export class PathResolverPipe implements PipeTransform {
  transform(path: string): string {
    return path.replace('localhost:4200', '');
  }
}
