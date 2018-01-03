angular.module('mwl.calendar.docs', ['mwl.calendar', 'ngAnimate', 'ui.bootstrap', 'colorpicker.module']);
angular
  .module('mwl.calendar.docs') //you will need to declare your module with the dependencies ['mwl.calendar', 'ui.bootstrap', 'ngAnimate']
  .controller('KitchenSinkCtrl', function($scope, moment, alert, calendarConfig) {

    var vm = this;
    vm.viewType = true;
    vm.listOfDependents = ['All Dependents', 'Sy Tuo', 'Sy Una', 'Sy Mommy'];
    vm.selectedDependent = 'All Dependents';

    //These variables MUST be set as a minimum for the calendar to work
    vm.calendarView = 'month';
    vm.viewDate = moment().toDate();
    var actions = [{
      label: '<i class=\'glyphicon glyphicon-pencil\'></i>',
      onClick: function(args) {
        alert.show('Edited', args.calendarEvent);
      }
    }, {
      label: '<i class=\'glyphicon glyphicon-remove\'></i>',
      onClick: function(args) {
        alert.show('Deleted', args.calendarEvent);
      }
    }];

    vm.filteredEvents = [];
    vm.events = [
      {
        title: 'An event',
        color: calendarConfig.colorTypes.warning,
        startsAt: moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(),
        endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate(),
        draggable: true,
        resizable: true,
        actions: actions
      }, 
      {
        title: '<i class="glyphicon glyphicon-asterisk"></i> <span class="text-primary">Another event</span>, with a <i>html</i> title',
        color: calendarConfig.colorTypes.info,
        startsAt: moment().subtract(1, 'day').toDate(),
        endsAt: moment().add(5, 'days').toDate(),
        draggable: true,
        resizable: true,
        actions: actions
      }, 
      {
        title: 'This is a really long event title that occurs on every year',
        color: calendarConfig.colorTypes.important,
        startsAt: moment().startOf('day').add(7, 'hours').toDate(),
        endsAt: moment().startOf('day').add(19, 'hours').toDate(),
        recursOn: 'year',
        draggable: true,
        resizable: true,
        actions: actions
      }, 
      {
        title: 'Violin Lessons for Adults (2017) [Sy Mommy]',
        color: calendarConfig.colorTypes.warning,
        startsAt: moment('2017-12-16').add(8, 'hours').toDate(),
        endsAt: moment('2017-12-16').add(10, 'hours').toDate(),
        actions: actions
      }
    ];

    var sections = [
      {
        dependent: 'Sy Tuo',
        name: 'Amber',
        curriculum: 'Taekwondo for Kids (2017)',
        curriculum_type: 'extracurricular',
        payment_status: 'cart',   //cart, unpaid, partially_paid, paid
        date_start: 'Nov 20, 2017',
        date_end: 'Dec 19, 2017',
        subjects: [
          {
            subject: 'Taekwondo',
            schedules: [
              {
                sched: 4,
                dow: 'TU,SU',
                time_start: '15:00',
                duration: 90
              }
            ]
          }
        ]
      },
      {
        dependent: 'Sy Una',
        name: 'Section A',
        curriculum: 'Kali for Teens (2017)',  //Curriculum or Extra Curricular Name
        curriculum_type: 'extracurricular',
        payment_status: 'partially_paid',
        date_start: 'Dec 1, 2017',
        date_end: 'Dec 31, 2017',
        subjects: [
          {
            subject: 'Kali',
            schedules: [
              {
                sched: 1,
                dow: 'MO,TH', //Days of the Week
                time_start: '17:00', //Military Time (24H)
                duration: 90  //Duration in minutes
              },
              {
                sched: 2,
                dow: 'SA',
                time_start: '15:00',
                duration: 120
              }
            ]
          }
        ]
      },
      {
        dependent: 'Sy Mommy',
        name: 'Daffodil',
        curriculum: 'Violin Lessons for Adults (2017)',
        curriculum_type: 'extracurricular',
        payment_status: 'paid',
        date_start: 'Oct 15, 2017',
        date_end: 'Dec 15, 2017',
        subjects: [
          {
            subject: 'Violin',
            schedules: [
              {
                sched: 3,
                dow: 'SA',
                time_start: '08:00',
                duration: 120
              }
            ]
          }
        ]
      },
      {
        dependent: 'Sy Tuo',
        name: 'Pious',
        curriculum: 'Kinder 1 (AY 2017-2018)',
        curriculum_type: 'k12',
        payment_status: 'unpaid',
        date_start: 'Jun 15, 2017',
        date_end: 'Mar 25, 2018',
        subjects: [
          {
            subject: 'SocEm Dev 1',
            schedules: [
              {
                sched: 5,
                dow: 'MO,TH',
                time_start: '07:30',
                duration: 60
              }
            ]
          },
          {
            subject: 'PE 1',
            schedules: [
              {
                sched: 6,
                dow: 'MO,TH',
                time_start: '08:30',
                duration: 60
              }
            ]
          },
          {
            subject: 'Math 1',
            schedules: [
              {
                sched: 7,
                dow: 'MO,TH',
                time_start: '09:30',
                duration: 60
              }
            ]
          },
          {
            subject: 'Mother Tongue 1',
            schedules: [
              {
                sched: 8,
                dow: 'MO,TH',
                time_start: '10:30',
                duration: 60
              }
            ]
          },
          {
            subject: 'Filipino 1',
            schedules: [
              {
                sched: 9,
                dow: 'MO,TH',
                time_start: '13:00',
                duration: 60
              }
            ]
          },
          {
            subject: 'English 1',
            schedules: [
              {
                sched: 10,
                dow: 'WE,FR',
                time_start: '08:30',
                duration: 60
              }
            ]
          },
          {
            subject: 'Science 1',
            schedules: [
              {
                sched: 11,
                dow: 'WE,FR',
                time_start: '09:30',
                duration: 60
              }
            ]
          },
          {
            subject: 'Araling Panlipunan1',
            schedules: [
              {
                sched: 12,
                dow: 'WE,FR',
                time_start: '10:30',
                duration: 60
              }
            ]
          },
          {
            subject: 'EsP 1',
            schedules: [
              {
                sched: 13,
                dow: 'WE,FR',
                time_start: '13:00',
                duration: 60
              }
            ]
          },
          {
            subject: 'Music and Arts 1',
            schedules: [
              {
                sched: 14,
                dow: 'WE,FR',
                time_start: '14:00',
                duration: 60
              }
            ]
          },
        ]
      },
      {
        dependent: 'Sy Una',
        name: 'Ruby',
        curriculum: 'Grade 10 (AY 2017-2018)',  //Curriculum or Extra Curricular Name
        curriculum_type: 'k12',
        payment_status: 'paid',
        date_start: 'Jun 4, 2017',
        date_end: 'Mar 19, 2018',
        subjects: [
          {
            subject: 'PE 10',
            schedules: [
              {
                sched: 15,
                dow: 'MO,WE', //Days of the Week
                time_start: '08:00', //Military Time (24H)
                duration: 90  //Duration in minutes
              }
            ]
          },
          {
            subject: 'Math 10',
            schedules: [
              {
                sched: 15,
                dow: 'MO,WE', //Days of the Week
                time_start: '09:30', //Military Time (24H)
                duration: 90  //Duration in minutes
              }
            ]
          },
          {
            subject: 'English 10',
            schedules: [
              {
                sched: 15,
                dow: 'MO,WE', //Days of the Week
                time_start: '11:00', //Military Time (24H)
                duration: 90  //Duration in minutes
              }
            ]
          },
          {
            subject: 'Filipino 10',
            schedules: [
              {
                sched: 15,
                dow: 'MO,WE', //Days of the Week
                time_start: '13:30', //Military Time (24H)
                duration: 90  //Duration in minutes
              }
            ]
          },
          {
            subject: 'Science 10',
            schedules: [
              {
                sched: 15,
                dow: 'MO,WE', //Days of the Week
                time_start: '15:00', //Military Time (24H)
                duration: 90  //Duration in minutes
              }
            ]
          },
          {
            subject: 'Araling Panlipunan 10',
            schedules: [
              {
                sched: 15,
                dow: 'TU,TH', //Days of the Week
                time_start: '07:00', //Military Time (24H)
                duration: 90  //Duration in minutes
              }
            ]
          },
          {
            subject: 'EsP 10',
            schedules: [
              {
                sched: 15,
                dow: 'TU,TH', //Days of the Week
                time_start: '08:30', //Military Time (24H)
                duration: 90  //Duration in minutes
              }
            ]
          },
          {
            subject: 'Music, Arts and Health 10',
            schedules: [
              {
                sched: 15,
                dow: 'TU,TH', //Days of the Week
                time_start: '10:00', //Military Time (24H)
                duration: 90  //Duration in minutes
              }
            ]
          },
          {
            subject: 'Tech and Livelihood Educ 10',
            schedules: [
              {
                sched: 15,
                dow: 'TU,TH', //Days of the Week
                time_start: '13:00', //Military Time (24H)
                duration: 90  //Duration in minutes
              }
            ]
          }
        ]
      },
    ];

    vm.simpleEvents = null;
    vm.detailedEvents = null;

    vm.scheduleViewClicked = function(viewtype='simple') {
      console.log("scheduleViewClicked: " + viewtype);

      if (viewtype == 'detailed') {
        if (!vm.detailedEvents) {
          vm.events = [];
          sections.forEach(function(section) {
            var temp_events = sectionToCalendarEvents(section, viewtype);

            temp_events.forEach(function(event) {
              vm.events.push(event);
            });
          })

          vm.detailedEvents = vm.events;
        } 
        else {
          console.log("load stored detailedEvents");
          vm.events = vm.detailedEvents;
        };
      } 
      else {
        if (!vm.simpleEvents) {
          vm.events = [];
          sections.forEach(function(section) {
            var temp_events = sectionToCalendarEvents(section);

            temp_events.forEach(function(event) {
              vm.events.push(event);
            });
          })

          vm.simpleEvents = vm.events;
        } 
        else {
          console.log("load stored simpleEvents");
          vm.events = vm.simpleEvents;
        };
      };

      vm.filteredEvents = vm.events.filter(filterDependent);
      console.log("all events displayed: ", vm.events);
      console.log("filtered events (" + vm.selectedDependent + "): ", vm.filteredEvents);
    };

    vm.selectDependent = function(dependent) {
      console.log("Currently selected dependent: ", vm.selectedDependent);
      
      vm.filteredEvents = vm.events.filter(filterDependent);
      console.log(vm.filteredEvents);
    }

    function filterDependent(section) {
      if (vm.selectedDependent != 'All Dependents') {
        return section.dependent == vm.selectedDependent;
      }
      else {
        return true;
      }
    }

    // Initialize
    vm.scheduleViewClicked();

    function scheduleToPartialEvents(schedule, date_start, until) {
      var partial_events = [];
      var dtstart = moment(date_start + ' ' + schedule.time_start);

      var temp_rrule = 'FREQ=WEEKLY;BYDAY=' + schedule.dow + ';DTSTART=' + dtstart.format('YYYYMMDD') + ';UNTIL=' + until.format('YYYYMMDD') + ';BYHOUR=' + dtstart.format('HH') + ';BYMINUTE=' + dtstart.format('mm');
      var partial_schedules = rrulestr(temp_rrule).all();

      partial_schedules.forEach(function(partial_sched) {
        var event = {
          color: 1,
          startsAt: moment(partial_sched).toDate(),
          endsAt: moment(partial_sched).add(schedule.duration, 'minutes').toDate(),
          draggable: true,
          resizable: true,
          actions: actions,
        }

        partial_events.push(event);
      });

      return partial_events;
    }

    function sectionToCalendarEvents(section, viewtype='simple') {
      var events = [];
      var title = '[' + section.dependent + '] ' + section.curriculum + ' - ' + section.name;
      var rrule_until = moment(section.date_end);

      // Create simple schedule view (applicable only to sections with multiple subjects)
      if ( (section.subjects.length > 1) && (viewtype != 'detailed') ) {
        // Create simple start & end schedule for the section for faster rendering time on front end
        section = convertToSimpleSectionSchedule(section);
      } 

      section.subjects.forEach(function(subject) {
        subject.schedules.forEach(function(schedule) {
          var partial_events = scheduleToPartialEvents(schedule, section.date_start, rrule_until);

          partial_events.forEach(function(event) {
            if (viewtype == 'detailed') {
              event.title = title + ' | ' + subject.subject;
            }
            else {
              event.title = title;
            }
            
            if ( (section.payment_status == 'paid') | (section.payment_status == 'partially_paid') ) {
              event.color = calendarConfig.colorTypes.info;
            }
            else {
              if (section.curriculum_type == 'extracurricular') {
                event.color = calendarConfig.colorTypes.warning;
              } 
              else {
                event.color = calendarConfig.colorTypes.important;
              }
            }

            event.dependent = section.dependent;

            // event.color = calendarConfig.colorTypes.important;
            events.push(event);
          })
        });
      });

      // console.log(events);
      return events;
    }

    function convertToSimpleSectionSchedule(section) {
      // Produce simple start & end schedule
      var subjects_single_entry = {};
      // This is only used for duration computation
      var temp_date = moment().format('YYYY-MM-DD');
      // Create a copy of the "section"
      temp_section = angular.copy(section);

      subjects_single_entry.subject = temp_section.curriculum;
      subjects_single_entry.schedules = [];

      var temp_dow_subjects = {
        "MO": {
          subject: "MO",
          schedules: []
        },
        "TU": {
          subject: "TU",
          schedules: []
        },
        "WE": {
          subject: "WE",
          schedules: []
        },
        "TH": {
          subject: "TH",
          schedules: []
        },
        "FR": {
          subject: "FR",
          schedules: []
        },
        "SA": {
          subject: "SA",
          schedules: []
        },
        "SU": {
          subject: "SU",
          schedules: []
        },
      }

      days_of_week = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

      // sort subjects into individual dow first
      temp_section.subjects.forEach(function(subject) {
        subject.schedules.forEach(function(schedule) {
          var temp_start = schedule.time_start;
          var temp_end = moment(temp_date + ' ' + temp_start).add(schedule.duration, 'minute').format('HH:mm');

          var temp_dows = schedule.dow.split(',');
          temp_dows.forEach(function(temp_dow) {
            var temp_sched = {
              dow: temp_dow,
              time_start: temp_start,
              time_end: temp_end
            }

            temp_dow_subjects[temp_dow].schedules.push(temp_sched)
          })
        })
      })

      // compute earliest start date and latest end date per day of week
      days_of_week.forEach(function(dow) {
        if (temp_dow_subjects[dow].schedules.length > 0) {
          var start_earliest = "23:59";
          var end_latest = "00:00";

          temp_dow_subjects[dow].schedules.forEach(function(schedule) {
            // Compare to get earliest start time
            if (schedule.time_start < start_earliest) {
              start_earliest = schedule.time_start;
            }

            // Compare to get latest end time
            if (schedule.time_end > end_latest) {
              end_latest = schedule.time_end;
            }
          })

          // Compute duration in minutes
          var diff = moment(temp_date + ' ' + end_latest).diff(moment(temp_date + ' ' + start_earliest));
          var duration = moment.duration(diff).asMinutes();

          var temp_sched = {
            dow: dow,
            time_start: start_earliest,
            duration: duration
          }
          subjects_single_entry.schedules.push(temp_sched);
        }
      });

      temp_section.subjects = [subjects_single_entry];
      return temp_section;
    }

    vm.cellIsOpen = true;

    vm.addEvent = function() {
      vm.events.push({
        title: 'New event',
        startsAt: moment().startOf('day').toDate(),
        endsAt: moment().endOf('day').toDate(),
        color: calendarConfig.colorTypes.important,
        draggable: true,
        resizable: true
      });
    };

    vm.eventClicked = function(event) {
      alert.show('Clicked', event);
    };

    vm.eventEdited = function(event) {
      alert.show('Edited', event);
    };

    vm.eventDeleted = function(event) {
      alert.show('Deleted', event);
    };

    vm.eventTimesChanged = function(event) {
      alert.show('Dropped or resized', event);
    };

    vm.toggle = function($event, field, event) {
      $event.preventDefault();
      $event.stopPropagation();
      event[field] = !event[field];
    };

    vm.timespanClicked = function(date, cell) {
      if (vm.calendarView === 'month') {
        if ((vm.cellIsOpen && moment(date).startOf('day').isSame(moment(vm.viewDate).startOf('day'))) || cell.events.length === 0 || !cell.inMonth) {
          vm.cellIsOpen = false;
        } else {
          vm.cellIsOpen = true;
          vm.viewDate = date;
        }
      } else if (vm.calendarView === 'year') {
        if ((vm.cellIsOpen && moment(date).startOf('month').isSame(moment(vm.viewDate).startOf('month'))) || cell.events.length === 0) {
          vm.cellIsOpen = false;
        } else {
          vm.cellIsOpen = true;
          vm.viewDate = date;
        }
      }
    };

  });
