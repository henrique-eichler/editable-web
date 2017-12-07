import { TestBed, inject } from '@angular/core/testing';

import { MessageService } from './message.service';

const MESSAGE = 'new message';

describe('MessageService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService]
    });
  });

  it('should be created', inject([MessageService], (service: MessageService) => {
    expect(service).toBeTruthy();
  }));

  it('shoud add a new message to the list of messages', inject([MessageService], (service: MessageService) => {

    expect(service.messages.length).toBe(0);

    service.add(MESSAGE);
    expect(service.messages.length).toBe(1);
    expect(service.messages[0]).toBe(MESSAGE);
  }));

  it('shoud clear the messages array when call clear', inject([MessageService], (service: MessageService) => {
    service.add(MESSAGE);
    expect(service.messages.length).toBe(1);

    service.clear();
    expect(service.messages.length).toBe(0);
  }));
});
