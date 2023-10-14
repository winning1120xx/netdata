<!--startmeta
custom_edit_url: "https://github.com/netdata/netdata/edit/master/collectors/proc.plugin/integrations/pressure_stall_information.md"
meta_yaml: "https://github.com/netdata/netdata/edit/master/collectors/proc.plugin/metadata.yaml"
sidebar_label: "Pressure Stall Information"
learn_status: "Published"
learn_rel_path: "Data Collection/Linux Systems/Pressure"
message: "DO NOT EDIT THIS FILE DIRECTLY, IT IS GENERATED BY THE COLLECTOR'S metadata.yaml FILE"
endmeta-->

# Pressure Stall Information


<img src="https://netdata.cloud/img/linuxserver.svg" width="150"/>


Plugin: proc.plugin
Module: /proc/pressure

<img src="https://img.shields.io/badge/maintained%20by-Netdata-%2300ab44" />

## Overview

Introduced in Linux kernel 4.20, `/proc/pressure` provides information about system pressure stall information
(PSI). PSI is a feature that allows the system to track the amount of time the system is stalled due to
resource contention, such as CPU, memory, or I/O.

The collectors monitored 3 separate files for CPU, memory, and I/O:

- **cpu**: Tracks the amount of time tasks are stalled due to CPU contention.
- **memory**: Tracks the amount of time tasks are stalled due to memory contention.
- **io**: Tracks the amount of time tasks are stalled due to I/O contention.
- **irq**: Tracks the amount of time tasks are stalled due to IRQ contention.

Each of them provides metrics for stall time over the last 10 seconds, 1 minute, 5 minutes, and 15 minutes.

Monitoring the /proc/pressure files can provide important insights into system performance and capacity planning:

- **Identifying resource contention**: If these metrics are consistently high, it indicates that tasks are
  frequently being stalled due to lack of resources, which can significantly degrade system performance.

- **Troubleshooting performance issues**: If a system is experiencing performance issues, these metrics can
  help identify whether resource contention is the cause.

- **Capacity planning**: By monitoring these metrics over time, you can understand trends in resource
  utilization and make informed decisions about when to add more resources to your system.




This collector is supported on all platforms.

This collector only supports collecting metrics from a single instance of this integration.


### Default Behavior

#### Auto-Detection

This integration doesn't support auto-detection.

#### Limits

The default configuration for this integration does not impose any limits on data collection.

#### Performance Impact

The default configuration for this integration is not expected to impose a significant performance impact on the system.


## Metrics

Metrics grouped by *scope*.

The scope defines the instance that the metric belongs to. An instance is uniquely identified by a set of labels.



### Per Pressure Stall Information instance



This scope has no labels.

Metrics:

| Metric | Dimensions | Unit |
|:------|:----------|:----|
| system.cpu_some_pressure | some10, some60, some300 | percentage |
| system.cpu_some_pressure_stall_time | time | ms |
| system.cpu_full_pressure | some10, some60, some300 | percentage |
| system.cpu_full_pressure_stall_time | time | ms |
| system.memory_some_pressure | some10, some60, some300 | percentage |
| system.memory_some_pressure_stall_time | time | ms |
| system.memory_full_pressure | some10, some60, some300 | percentage |
| system.memory_full_pressure_stall_time | time | ms |
| system.io_some_pressure | some10, some60, some300 | percentage |
| system.io_some_pressure_stall_time | time | ms |
| system.io_full_pressure | some10, some60, some300 | percentage |
| system.io_full_pressure_stall_time | time | ms |



## Alerts

There are no alerts configured by default for this integration.


## Setup

### Prerequisites

No action required.

### Configuration

#### File

There is no configuration file.
#### Options



There are no configuration options.

#### Examples
There are no configuration examples.

